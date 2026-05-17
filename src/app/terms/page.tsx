import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | ZEAL MEDIA Web Development Agency',
  description: 'Terms of service for ZEAL MEDIA web development services. Read our terms and conditions for website development, SEO, and consulting services.',
  alternates: {
    canonical: 'https://zealgg.com/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#050505] text-slate-200">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-[#050505]/60 border-b border-white/5">
        <a href="/" className="text-xl font-medium tracking-tighter text-white">
          ZEAL MEDIA <span className="opacity-40">TERMS</span>
        </a>
        <a href="/" className="text-sm font-medium hover:text-white transition-colors duration-300">
          HOME
        </a>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-32 md:py-48">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-12">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: May 18, 2026</p>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-a:text-emerald-400">
          <h2 className="text-2xl text-white mt-12 mb-6">1. Services</h2>
          <p className="text-slate-400 mb-6">
            ZEAL MEDIA provides web development, design, SEO optimization, and consulting services. Our services are delivered according to the specifications agreed upon in each project proposal or statement of work.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">2. Project Timeline</h2>
          <p className="text-slate-400 mb-6">
            Project timelines are estimates based on the scope defined at project initiation. Timelines may be adjusted based on client feedback cycles, content availability, and scope changes. We commit to transparent communication about any timeline adjustments.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">3. Payment Terms</h2>
          <p className="text-slate-400 mb-6">
            Payment terms are specified in each project proposal. Typically, we require an initial deposit to commence work, with milestone-based payments throughout the project. All fees are quoted in USD unless otherwise specified.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">4. Intellectual Property</h2>
          <p className="text-slate-400 mb-6">
            Upon full payment, all custom code, designs, and content created for your project become your intellectual property. We retain the right to showcase completed work in our portfolio unless otherwise agreed in writing.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">5. Revisions</h2>
          <p className="text-slate-400 mb-6">
            Each project includes a specified number of revision rounds as defined in the proposal. Additional revisions beyond the included scope may incur additional charges.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">6. Third-Party Services</h2>
          <p className="text-slate-400 mb-6">
            Our services may involve third-party tools, platforms, and services (hosting, analytics, payment processors, etc.). These services have their own terms of service and privacy policies. We are not responsible for the performance or policies of third-party services.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">7. Limitation of Liability</h2>
          <p className="text-slate-400 mb-6">
            ZEAL MEDIA is not liable for indirect, incidental, or consequential damages arising from our services. Our total liability is limited to the amount paid for the specific service giving rise to the claim.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">8. Confidentiality</h2>
          <p className="text-slate-400 mb-6">
            We treat all client information as confidential and will not disclose it to third parties without written consent, except as required by law.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">9. Contact</h2>
          <p className="text-slate-400 mb-6">
            For questions about these terms, please contact us through our <a href="/contact">contact page</a>.
          </p>
        </div>
      </article>

      <footer className="w-full border-t border-white/5 py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">
        <div>ZEAL MEDIA / {new Date().getFullYear()}</div>
        <div className="mt-4 md:mt-0 flex gap-8">
          <a href="/privacy" className="hover:text-white transition-colors duration-500">Privacy</a>
        </div>
      </footer>
    </main>
  )
}
