import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About ZEAL MEDIA | Award-Winning Web Development Agency & Website Makers',
  description: 'Learn about ZEAL MEDIA, a premier web development agency specializing in Next.js, React, SEO, and custom web applications. Meet our team of expert website makers and engineers.',
  alternates: {
    canonical: 'https://zealgg.com/about',
  },
  openGraph: {
    title: 'About ZEAL MEDIA | Web Development Agency',
    description: 'Award-winning digital experiences, custom web applications, and dominant SEO strategies. Meet the team behind ZEAL MEDIA.',
    type: 'website',
    url: 'https://zealgg.com/about',
    siteName: 'ZEAL MEDIA',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#050505] text-slate-200">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-[#050505]/60 border-b border-white/5">
        <a href="/" className="text-xl font-medium tracking-tighter text-white">
          ZEAL MEDIA <span className="opacity-40">ABOUT</span>
        </a>
        <div className="flex gap-8 items-center">
          <a href="/services" className="text-sm font-medium hover:text-white transition-colors duration-300 hidden md:block">
            SERVICES
          </a>
          <a href="/insights" className="text-sm font-medium hover:text-white transition-colors duration-300 hidden md:block">
            INSIGHTS
          </a>
          <a href="/contact" className="text-sm font-medium hover:text-white transition-colors duration-300">
            CONTACT
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 pt-48 pb-32 md:px-12 md:pt-64 md:pb-48 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-white">
            We Engineer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Digital Excellence.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-[65ch] leading-relaxed">
            ZEAL MEDIA is a web development agency built on the belief that websites should be engineered, not just designed. We combine technical expertise in Next.js and React with deep SEO knowledge to build websites that rank, convert, and scale.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-24 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              We exist to bridge the gap between beautiful design and technical performance. Too many agencies deliver websites that look stunning but fail to rank in search engines or convert visitors into customers. We believe the best websites do both exceptionally well.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg mt-6">
              Every project we undertake is built on a foundation of technical SEO, performance optimization, and user experience design. We don&apos;t just build websites; we engineer digital platforms that drive measurable business results.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Our Approach</h2>
            <ul className="space-y-6 text-slate-400">
              <li>
                <h3 className="text-white font-medium mb-2">SEO-First Development</h3>
                <p>Every line of code is written with search engine visibility in mind. From semantic HTML to structured data, we build SEO into the foundation, not as an afterthought.</p>
              </li>
              <li>
                <h3 className="text-white font-medium mb-2">Performance Obsession</h3>
                <p>We set performance budgets before design begins and enforce them throughout development. Sub-2-second page loads are our standard, not our goal.</p>
              </li>
              <li>
                <h3 className="text-white font-medium mb-2">Conversion-Driven Design</h3>
                <p>Beautiful websites that don&apos;t convert are expensive brochures. We design every element to guide users toward meaningful actions.</p>
              </li>
              <li>
                <h3 className="text-white font-medium mb-2">Long-Term Partnerships</h3>
                <p>We don&apos;t disappear after launch. Our ongoing support and optimization services ensure your website continues to perform and evolve.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="px-6 py-24 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-16">Technical Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10">
            <h3 className="text-xl text-white font-medium mb-4">Frontend Engineering</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Next.js, React, TypeScript, Framer Motion, GSAP, Three.js, Tailwind CSS. We build interfaces that are fast, accessible, and visually stunning.
            </p>
          </div>
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10">
            <h3 className="text-xl text-white font-medium mb-4">Backend & APIs</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Node.js, Python, PostgreSQL, MongoDB, Redis, GraphQL, REST. We architect scalable backends that handle millions of requests.
            </p>
          </div>
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10">
            <h3 className="text-xl text-white font-medium mb-4">SEO & Analytics</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Technical SEO, Core Web Vitals optimization, structured data, analytics architecture, A/B testing, and conversion rate optimization.
            </p>
          </div>
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10">
            <h3 className="text-xl text-white font-medium mb-4">E-commerce</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Shopify Plus, headless commerce, custom checkout flows, payment integration, inventory management, and conversion optimization.
            </p>
          </div>
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10">
            <h3 className="text-xl text-white font-medium mb-4">Cloud & DevOps</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Vercel, AWS, Docker, CI/CD pipelines, monitoring, and infrastructure as code. We deploy with confidence and scale with ease.
            </p>
          </div>
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10">
            <h3 className="text-xl text-white font-medium mb-4">UI/UX Design</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              User research, wireframing, prototyping, design systems, accessibility audits, and interaction design that delights users.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 py-24 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-16">Results That Speak</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">50+</div>
            <p className="text-slate-400 text-sm">Websites Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">300%</div>
            <p className="text-slate-400 text-sm">Average Traffic Increase</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">98</div>
            <p className="text-slate-400 text-sm">Average PageSpeed Score</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">#1</div>
            <p className="text-slate-400 text-sm">Google Rankings Achieved</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl tracking-tighter text-white mb-8">Ready to work with us?</h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            Let&apos;s discuss your project and explore how our web development expertise can drive your business forward.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-zinc-950 font-medium hover:scale-105 transition-transform duration-500 ease-out"
          >
            Start a Project
          </a>
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
