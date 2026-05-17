import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  metadataBase: new URL('https://zealmedia.info'),
  title: {
    default: 'ZEAL MEDIA — Web Development & SEO Agency',
    template: '%s | ZEAL MEDIA',
  },
  description: 'Premium web development agency specializing in Next.js websites, SEO optimization, and custom web applications.',
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
    url: 'https://zealmedia.info',
    siteName: 'ZEAL MEDIA',
    title: 'ZEAL MEDIA — Web Development & SEO Agency',
    description: 'Premium web development agency specializing in Next.js websites, SEO optimization, and custom web applications.',
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
    title: 'ZEAL MEDIA — Web Development & SEO Agency',
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
    google: '',
  },
  alternates: {
    canonical: 'https://zealmedia.info',
    languages: {
      'en-US': 'https://zealmedia.info',
    },
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
        '@id': 'https://zealmedia.info/#organization',
        name: 'ZEAL MEDIA',
        url: 'https://zealmedia.info',
        logo: {
          '@type': 'ImageObject',
          url: 'https://zealmedia.info/logo.png',
          width: 512,
          height: 512,
        },
        description: 'Premium web development agency specializing in Next.js, React, SEO, and custom web applications.',
        sameAs: [
          'https://www.linkedin.com/company/zealmedia',
          'https://twitter.com/zealmedia',
          'https://www.instagram.com/zealmedia',
          'https://www.facebook.com/zealmedia',
          'https://www.youtube.com/@zealmedia',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          url: 'https://zealmedia.info/contact',
          availableLanguage: ['English'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://zealmedia.info/#website',
        url: 'https://zealmedia.info',
        name: 'ZEAL MEDIA',
        publisher: {
          '@id': 'https://zealmedia.info/#organization',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://zealmedia.info/#service',
        name: 'ZEAL MEDIA',
        image: 'https://zealmedia.info/og-image.jpg',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
        url: 'https://zealmedia.info',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        sameAs: [
          'https://www.linkedin.com/company/zealmedia',
          'https://twitter.com/zealmedia',
          'https://www.instagram.com/zealmedia',
          'https://www.facebook.com/zealmedia',
          'https://www.youtube.com/@zealmedia',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Web Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Next.js Web Development',
                description: 'High-performance websites built with Next.js and React',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Technical SEO Optimization',
                description: 'SEO built into every line of code',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'E-commerce Development',
                description: 'Shopify, headless commerce, and custom online stores',
              },
            },
          ],
        },
      },
    ],
  }

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="alternate" hrefLang="en" href="https://zealmedia.info" />
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
