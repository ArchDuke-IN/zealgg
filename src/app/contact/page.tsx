import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Contact ZEAL MEDIA | Web Development Agency — Start Your Project',
  description: 'Get in touch with ZEAL MEDIA, a leading web development agency. Request a quote for Next.js development, SEO optimization, e-commerce solutions, or custom web applications.',
  alternates: {
    canonical: 'https://zealmedia.info/contact',
  },
  openGraph: {
    title: 'Contact ZEAL MEDIA | Start Your Web Development Project',
    description: 'Ready to build a high-performance website? Contact our team of expert developers and SEO specialists.',
    type: 'website',
    url: 'https://zealmedia.info/contact',
    siteName: 'ZEAL MEDIA',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#050505] text-slate-200">
      <Navbar />

      <section className="relative px-6 pt-36 pb-20 md:px-12 md:pt-48 md:pb-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-white">
            Let&apos;s Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Exceptional.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-[65ch] leading-relaxed">
            Whether you need a high-performance website, a custom web application, or an SEO strategy that dominates search results, our team is ready to engineer your digital success.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white mb-8">Get in Touch</h2>
            <ContactForm />
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white mb-6">What We Offer</h2>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">&#9679;</span>
                  <span><strong className="text-white">Next.js & React Development</strong> — High-performance websites optimized for Core Web Vitals and SEO</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">&#9679;</span>
                  <span><strong className="text-white">E-commerce Solutions</strong> — Shopify, headless commerce, and custom online stores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">&#9679;</span>
                  <span><strong className="text-white">Technical SEO</strong> — Site architecture, structured data, and ranking optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">&#9679;</span>
                  <span><strong className="text-white">Custom Web Applications</strong> — CRMs, dashboards, and SaaS platforms</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white mb-6">Our Process</h2>
              <ol className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">01</span>
                  <span><strong className="text-white">Discovery</strong> — We learn about your business and goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">02</span>
                  <span><strong className="text-white">Strategy</strong> — Technical architecture and SEO plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">03</span>
                  <span><strong className="text-white">Design</strong> — UI/UX design with your feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">04</span>
                  <span><strong className="text-white">Development</strong> — Agile build with regular demos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">05</span>
                  <span><strong className="text-white">Launch & Support</strong> — Deployment and optimization</span>
                </li>
              </ol>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-lg font-medium text-white mb-3">Why Choose ZEAL MEDIA?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                We&apos;re not just website makers — we&apos;re your digital growth partner. Every project we deliver is engineered for search rankings, user engagement, and business growth.
              </p>
              <a href="/about" className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors inline-flex items-center gap-1">
                Learn more about us <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
