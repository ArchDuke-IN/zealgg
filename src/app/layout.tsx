import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  metadataBase: new URL('https://zealgg.com'),
  title: {
    default: 'ZEAL MEDIA | Web Development Agency & Website Makers — Next.js, SEO, E-commerce',
    template: '%s | ZEAL MEDIA',
  },
  description: 'ZEAL MEDIA is a premium web development agency specializing in Next.js websites, technical SEO, e-commerce solutions, and custom web applications. We build high-performance websites that rank #1 on Google and convert visitors into customers.',
  keywords: [
    'web development agency',
    'website makers',
    'website development company',
    'Next.js development',
    'React development',
    'SEO agency',
    'technical SEO',
    'e-commerce development',
    'custom web applications',
    'SaaS development',
    'website design agency',
    'Zeal Media',
  ],
  authors: [{ name: 'ZEAL MEDIA' }],
  creator: 'ZEAL MEDIA',
  publisher: 'ZEAL MEDIA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zealgg.com',
    siteName: 'ZEAL MEDIA',
    title: 'ZEAL MEDIA | Premium Web Development Agency',
    description: 'Award-winning digital experiences, custom web applications, and dominant SEO strategies. We engineer websites that rank and convert.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZEAL MEDIA — Web Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZEAL MEDIA | Web Development Agency',
    description: 'Premium web development, SEO optimization, and custom web applications.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://zealgg.com/#organization',
        name: 'ZEAL MEDIA',
        url: 'https://zealgg.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://zealgg.com/logo.png',
        },
        description: 'Premium web development agency specializing in Next.js, React, SEO, and custom web applications.',
        sameAs: [],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          url: 'https://zealgg.com/contact',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://zealgg.com/#website',
        url: 'https://zealgg.com',
        name: 'ZEAL MEDIA',
        publisher: {
          '@id': 'https://zealgg.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://zealgg.com/insights?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://zealgg.com/#service',
        name: 'ZEAL MEDIA',
        image: 'https://zealgg.com/og-image.jpg',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 0,
          longitude: 0,
        },
        url: 'https://zealgg.com',
        telephone: '',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        sameAs: [],
      },
    ],
  }

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased text-slate-300 bg-[#050505]`}>
        <div className="noise-overlay pointer-events-none fixed inset-0 z-50 opacity-20"></div>
        {children}
      </body>
    </html>
  )
}
