import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact ZEAL MEDIA | Web Development Agency — Start Your Project',
  description: 'Get in touch with ZEAL MEDIA, a leading web development agency. Request a quote for Next.js development, SEO optimization, e-commerce solutions, or custom web applications.',
  alternates: {
    canonical: 'https://zealgg.com/contact',
  },
  openGraph: {
    title: 'Contact ZEAL MEDIA | Start Your Web Development Project',
    description: 'Ready to build a high-performance website? Contact our team of expert developers and SEO specialists.',
    type: 'website',
    url: 'https://zealgg.com/contact',
    siteName: 'ZEAL MEDIA',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#050505] text-slate-200">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-[#050505]/60 border-b border-white/5">
        <a href="/" className="text-xl font-medium tracking-tighter text-white">
          ZEAL MEDIA <span className="opacity-40">CONTACT</span>
        </a>
        <div className="flex gap-8 items-center">
          <a href="/services" className="text-sm font-medium hover:text-white transition-colors duration-300 hidden md:block">
            SERVICES
          </a>
          <a href="/insights" className="text-sm font-medium hover:text-white transition-colors duration-300 hidden md:block">
            INSIGHTS
          </a>
          <a href="/" className="text-sm font-medium hover:text-white transition-colors duration-300">
            HOME
          </a>
        </div>
      </nav>

      <section className="relative px-6 pt-48 pb-32 md:px-12 md:pt-64 md:pb-48 max-w-7xl mx-auto">
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
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">&#9679;</span>
                  <span><strong className="text-white">UI/UX Design</strong> — Premium interfaces with cinematic animations</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white mb-6">Our Process</h2>
              <ol className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">01</span>
                  <span><strong className="text-white">Discovery</strong> — We learn about your business, goals, and target audience</span>
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
                  <span><strong className="text-white">Launch & Support</strong> — Deployment and ongoing optimization</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-white/5 py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">
        <div>ZEAL MEDIA / {new Date().getFullYear()}</div>
        <div className="mt-4 md:mt-0 flex gap-8">
          <a href="/privacy" className="hover:text-white transition-colors duration-500">Privacy</a>
          <a href="/terms" className="hover:text-white transition-colors duration-500">Terms</a>
        </div>
      </footer>
    </main>
  )
}
