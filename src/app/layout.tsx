import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  metadataBase: new URL('https://zealmedia.com'),
  title: 'ZEAL MEDIA | Enterprise Web Development & Premium SaaS Engineering',
  description: 'Top-tier web development agency specializing in Next.js, high-conversion SaaS interfaces, custom CRM solutions, and technical SEO architecture.',
  keywords: ['Web Development Agency', 'Enterprise Next.js Development', 'SaaS Engineering', 'Custom CRM Solutions', 'Technical SEO', 'High-End Web Design', 'Frontend Engineering'],
  openGraph: {
    title: 'ZEAL MEDIA | Enterprise Web Development',
    description: 'Award-winning digital experiences, custom CRMs, and dominant SEO strategies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zeal Media',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} font-sans antialiased text-slate-300 bg-[#050505]`}>
        <div className="noise-overlay pointer-events-none fixed inset-0 z-50 opacity-20"></div>
        {children}
      </body>
    </html>
  )
}
