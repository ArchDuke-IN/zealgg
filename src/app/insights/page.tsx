import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Insights & Blog | Web Development, SEO & Design Articles — ZEAL MEDIA',
  description: 'Expert insights on web development, Next.js SEO optimization, website design trends, and e-commerce strategies from the ZEAL MEDIA team. Stay ahead with our technical guides.',
  alternates: {
    canonical: 'https://zealmedia.info/insights',
  },
  openGraph: {
    title: 'Insights & Blog | ZEAL MEDIA',
    description: 'Engineering deep-dives, architectural post-mortems, and strategy protocols for modern web development.',
    type: 'website',
    url: 'https://zealmedia.info/insights',
    siteName: 'ZEAL MEDIA',
  },
}

export default function InsightsPage() {
  return (
    <main className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#050505] text-slate-200">
      <Navbar />

      <section className="px-6 pt-36 pb-20 md:px-12 md:pt-48 md:pb-32 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter leading-none text-white">
            Signal Intelligence.
          </h1>
          <p className="mt-8 text-lg text-slate-400 max-w-[50ch] leading-relaxed">
            Engineering deep-dives, architectural post-mortems, and strategy protocols for modern web development, SEO optimization, and website design.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          {blogPosts.map((post) => (
            <div key={post.slug}>
              <Link 
                href={`/insights/${post.slug}`} 
                className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 p-6 md:p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-white/15 transition-colors duration-500"
              >
                <div className="w-full md:w-64 h-40 md:h-32 shrink-0 rounded-2xl overflow-hidden relative filter grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-xs font-mono uppercase tracking-widest text-slate-500">
                    <span className="text-emerald-500">{post.category}</span>
                    <span>&bull;</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300 max-w-2xl">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm mt-2 line-clamp-2">{post.description}</p>
                </div>
                
                <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full border border-white/10 items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Internal linking CTA */}
      <section className="px-6 py-24 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Need a web development agency?</h3>
            <p className="text-slate-400">We don&apos;t just write about best practices — we implement them for every client.</p>
          </div>
          <Link href="/contact" className="shrink-0 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
