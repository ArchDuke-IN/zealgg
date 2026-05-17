import type { Metadata } from 'next'
import LoginPage from './LoginPage'

export const metadata: Metadata = {
  title: 'Admin Login | ZEAL MEDIA',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLoginPage() {
  return <LoginPage />
}
