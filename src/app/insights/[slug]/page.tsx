import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getRelatedPosts, getAllSlugs } from '@/data/blog-posts'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | ZEAL MEDIA Insights`,
    description: post.description,
    alternates: {
      canonical: `https://zealmedia.info/insights/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://zealmedia.info/insights/${post.slug}`,
      siteName: 'ZEAL MEDIA',
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.coverAlt,
        },
      ],
    },
  }
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(post.slug, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZEAL MEDIA',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zealmedia.info/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://zealmedia.info/insights/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
  }

  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmed = line.trim()
      if (!trimmed) return <br key={i} />

      if (trimmed.startsWith('## ')) {
        return <h2 key={i} className="text-3xl text-white mt-16 mb-8 font-medium tracking-tight">{trimmed.slice(3)}</h2>
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={i} className="text-2xl text-white mt-12 mb-6 font-medium tracking-tight">{trimmed.slice(4)}</h3>
      }
      if (trimmed.startsWith('```')) {
        return null
      }
      if (trimmed.startsWith('- ')) {
        return (
          <li key={i} className="text-slate-400 mb-2 ml-4 list-disc">
            {trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '$1')}
          </li>
        )
      }
      if (trimmed.match(/^\d+\.\s/)) {
        return (
          <li key={i} className="text-slate-400 mb-2 ml-4 list-decimal">
            {trimmed.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '$1')}
          </li>
        )
      }
      if (trimmed.startsWith('\\`\\`\\`')) {
        return <pre key={i} className="bg-white/5 rounded-xl p-6 my-8 overflow-x-auto text-sm text-slate-300 font-mono">{trimmed.slice(3)}</pre>
      }

      const processedText = trimmed
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-emerald-400 hover:text-emerald-300 underline">$1</a>')

      if (trimmed.startsWith('> ')) {
        return (
          <blockquote key={i} className="border-l-2 border-emerald-500 pl-8 my-16 text-2xl text-white italic">
            {trimmed.slice(2)}
          </blockquote>
        )
      }

      return (
        <p key={i} className="text-slate-400 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: processedText }} />
      )
    })
  }

  return (
    <main className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#050505] text-slate-200">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <Navbar />

      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20 md:pt-48">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-8 text-xs font-mono uppercase tracking-widest text-emerald-500">
            <span>{post.category}</span>
            <span className="text-slate-500">&bull;</span>
            <span className="text-slate-500">{new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            <span className="text-slate-500">&bull;</span>
            <span className="text-slate-500">{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.1] text-white">
            {post.title}
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-white text-sm font-medium">{post.author}</p>
              <p className="text-slate-500 text-xs">{post.authorRole}</p>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="w-full h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden mb-16 relative">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              className="object-cover filter grayscale opacity-80"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {renderContent(post.content)}
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs uppercase tracking-wider text-slate-500 border border-white/10 px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-6 py-24 md:px-12 max-w-4xl mx-auto border-t border-white/5">
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-12">Related Insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/insights/${related.slug}`}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
              >
                <div className="text-xs text-emerald-500 uppercase tracking-wider mb-3">{related.category}</div>
                <h3 className="text-lg text-white font-medium tracking-tight group-hover:text-emerald-50 transition-colors line-clamp-3">
                  {related.title}
                </h3>
                <p className="text-slate-500 text-sm mt-3 line-clamp-2">{related.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-24 md:px-12 max-w-4xl mx-auto">
        <div className="p-10 rounded-[2rem] bg-gradient-to-r from-emerald-500/10 via-white/[0.02] to-cyan-500/10 border border-white/10 text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Need help implementing these strategies?</h3>
          <p className="text-slate-400 mb-8">Our team of web development and SEO experts can build your high-performance website.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors">
            Get a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
