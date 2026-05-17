import type { Metadata } from 'next'
import HomePageClient from './HomePageClient'

export const metadata: Metadata = {
  title: 'ZEAL MEDIA | Web Development Agency & Website Makers — Next.js, SEO, E-commerce',
  description: 'ZEAL MEDIA is a premium web development agency specializing in Next.js websites, technical SEO, e-commerce solutions, and custom web applications. We build high-performance websites that rank on Google and convert visitors into customers.',
  alternates: {
    canonical: 'https://zealmedia.info',
  },
}

export default function HomePage() {
  return <HomePageClient />
}
