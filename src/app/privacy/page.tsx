import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | ZEAL MEDIA Web Development Agency',
  description: 'Privacy policy for ZEAL MEDIA. Learn how we collect, use, and protect your personal information when you use our web development services.',
  alternates: {
    canonical: 'https://zealmedia.info/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#050505] text-slate-200">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20 md:pt-48">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-12">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: May 18, 2026</p>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-a:text-emerald-400">
          <h2 className="text-2xl text-white mt-12 mb-6">1. Information We Collect</h2>
          <p className="text-slate-400 mb-6">
            We collect information you provide directly, such as your name, email address, company name, and project details when you submit our <a href="/contact">contact form</a>. We also collect technical information automatically, including your IP address, browser type, and pages visited.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">2. How We Use Your Information</h2>
          <p className="text-slate-400 mb-6">
            We use your information to respond to inquiries, provide <a href="/services">web development services</a>, improve our website, and communicate with you about our services. We do not sell your personal information to third parties.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">3. Data Security</h2>
          <p className="text-slate-400 mb-6">
            We implement industry-standard security measures to protect your personal information, including HTTPS encryption, secure server infrastructure, and regular security audits.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">4. Cookies and Analytics</h2>
          <p className="text-slate-400 mb-6">
            Our website may use cookies and similar technologies to improve user experience and analyze website traffic. You can control cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">5. Third-Party Services</h2>
          <p className="text-slate-400 mb-6">
            We may use third-party services such as Vercel for hosting, analytics providers for website monitoring, and email services for communication. These services have their own privacy policies.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">6. Your Rights</h2>
          <p className="text-slate-400 mb-6">
            You have the right to access, correct, or delete your personal information. To exercise these rights, contact us through our <a href="/contact">contact page</a>.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-6">7. Contact</h2>
          <p className="text-slate-400 mb-6">
            If you have questions about this privacy policy, please contact us through our <a href="/contact">contact page</a>.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  )
}
