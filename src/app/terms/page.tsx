import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | ZEAL MEDIA Web Development Agency',
  description: 'Terms of service for ZEAL MEDIA web development services. Read our terms and conditions for website development, SEO, and consulting services.',
  alternates: {
    canonical: 'https://zealmedia.info/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#050505] text-slate-200">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20 md:pt-48">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-12">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: May 18, 2026</p>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-a:text-emerald-400">
          <h2 className="text-2xl text-white mt-12 mb-6">1. Services</h2>
          <p className="text-slate-400 mb-6">
            ZEAL MEDIA provides <a href="/services">web development, design, SEO optimization, and consulting services</a>. Our services are delivered according to the specifications agreed upon in each project proposal or statement of work.
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

      <Footer />
    </main>
  )
}
