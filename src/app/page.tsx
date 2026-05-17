import type { Metadata } from 'next'
import HomePageClient from './HomePageClient'

export const metadata: Metadata = {
  title: 'ZEAL MEDIA | Web Development & SEO Agency',
  description: 'Premium web development agency specializing in Next.js websites, SEO optimization, and custom web applications.',
  alternates: {
    canonical: 'https://zealmedia.info/',
  },
}

export default function HomePage() {
  return <HomePageClient />
}
