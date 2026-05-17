import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Web Development Services | Next.js, React, SEO & E-commerce — ZEAL MEDIA',
  description: 'ZEAL MEDIA offers expert web development services including Next.js development, React applications, technical SEO optimization, e-commerce solutions, and custom CRM platforms. Get a quote today.',
  alternates: {
    canonical: 'https://zealmedia.info/services',
  },
  openGraph: {
    title: 'Web Development Services | ZEAL MEDIA',
    description: 'Expert Next.js development, SEO optimization, e-commerce solutions, and custom web applications. Engineering scalable web architectures.',
    type: 'website',
    url: 'https://zealmedia.info/services',
    siteName: 'ZEAL MEDIA',
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#050505] text-slate-200">
      <Navbar />

      <section className="relative px-6 pt-36 pb-20 md:px-12 md:pt-48 md:pb-32 max-w-7xl mx-auto">
        <div className="absolute inset-0 max-w-full overflow-hidden pointer-events-none -z-10">
          <div
            className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/40 blur-[120px]"
            style={{ animation: 'pulse 15s ease-in-out infinite' }}
          />
        </div>

        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-white">
            Engineering scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Web Architectures.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-[65ch] leading-relaxed">
            We deploy modern JavaScript ecosystems—Next.js, React, and robust backend microservices. SEO optimized at the edge, meticulously engineered for performance. As a leading web development agency, we deliver websites that rank on Google and convert visitors into customers.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6 grid-flow-dense">
          {/* Card 1 - Large */}
          <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden md:col-span-2 md:row-span-2">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110 transform">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end min-h-[300px]">
              <h2 className="text-3xl tracking-tight text-white mb-4">React & Next.js Development</h2>
              <p className="text-slate-400 max-w-md leading-relaxed">
                We utilize Server Components, edge caching, and static generation to build lightning-fast web applications. Our Next.js development services deliver top-tier Core Web Vitals scores, ensuring high rankings on Google. Every website we build is optimized for performance, accessibility, and search engine visibility from the ground up.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><span className="text-emerald-400">&#9679;</span> Server-Side Rendering (SSR)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">&#9679;</span> Static Site Generation (SSG)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">&#9679;</span> TypeScript for type safety</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">&#9679;</span> Core Web Vitals optimization</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden">
            <div className="mb-12">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <h3 className="text-xl text-white mb-3">Custom CRM Solutions</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tailored internal tools and data management systems, engineered with TypeScript and high-security backend layers. We build CRMs that streamline your operations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden">
            <div className="mb-12">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5"><path d="M3 3v18h18" /><path d="M18 17V9M13 17V5M8 17v-3" /></svg>
            </div>
            <h3 className="text-xl text-white mb-3">Technical SEO</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Programmatic SEO strategies, dynamic XML sitemaps, semantic HTML, structured data, and rapid time-to-first-byte (TTFB). We build SEO into every project.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden">
            <div className="mb-12">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>
            </div>
            <h3 className="text-xl text-white mb-3">E-commerce Development</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Shopify Plus, headless commerce, custom checkout flows, and conversion optimization. We build online stores that sell. Read our <a href="/insights/ecommerce-website-development-guide" className="text-emerald-400 hover:text-emerald-300 underline">complete e-commerce guide</a>.
            </p>
          </div>

          {/* Card 5 */}
          <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden">
            <div className="mb-12">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </div>
            <h3 className="text-xl text-white mb-3">Web Application Development</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Custom SaaS platforms, dashboards, and internal tools built with React, Node.js, and modern cloud infrastructure. Learn about our <a href="/insights/custom-web-application-development" className="text-emerald-400 hover:text-emerald-300 underline">development process</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-12 md:py-48 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl tracking-tighter text-white mb-8">Ready to dominate your industry?</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Whether you need a new website, an e-commerce platform, or a custom web application, our team of expert developers and SEO specialists is ready to engineer your digital success.
            </p>
            <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-zinc-950 font-medium hover:scale-105 transition-transform duration-500 ease-out">
              Initiate Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </a>
          </div>
          <div className="flex flex-col gap-6 text-slate-400 w-full max-w-md">
            <div className="flex justify-between py-4 border-b border-white/10">
              <span>Frontend Architecture</span>
              <span className="text-white">Next.js / React</span>
            </div>
            <div className="flex justify-between py-4 border-b border-white/10">
              <span>Backend & API</span>
              <span className="text-white">Node / Serverless</span>
            </div>
            <div className="flex justify-between py-4 border-b border-white/10">
              <span>Design Engineering</span>
              <span className="text-white">Framer Motion</span>
            </div>
            <div className="flex justify-between py-4 border-b border-white/10">
              <span>SEO & Analytics</span>
              <span className="text-white">Technical SEO</span>
            </div>
            <div className="flex justify-between py-4 border-b border-white/10">
              <span>E-commerce</span>
              <span className="text-white">Shopify / Headless</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
