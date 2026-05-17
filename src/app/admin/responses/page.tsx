import type { Metadata } from 'next'
import ResponsesClient from './ResponsesClient'

export const metadata: Metadata = {
  title: 'Form Responses | ZEAL MEDIA Admin',
  description: 'View all contact form submissions.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ResponsesPage() {
  return <ResponsesClient />
}
