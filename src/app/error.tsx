'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-[#050505] text-white px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-6xl font-bold tracking-tighter mb-4">Something went wrong</h1>
        <p className="text-slate-400 text-lg mb-8">
          An unexpected error occurred. Our team has been notified and is working to resolve it.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:border-white/40 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
