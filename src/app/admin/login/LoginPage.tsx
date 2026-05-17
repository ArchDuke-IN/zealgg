'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        router.push('/admin/responses')
        router.refresh()
      } else {
        const data = await res.json()
        setError(data.error || 'Invalid password')
      }
    } catch {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[100dvh] bg-[#050505] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <Link href="/" className="text-xl font-medium tracking-tighter text-white/60 hover:text-white transition-colors mb-16 block">
          ZEAL MEDIA
        </Link>

        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Admin Access</h1>
          <p className="text-slate-500 text-sm mb-8">Enter the admin password to view form responses.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-[#0A0A0A] rounded-xl px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50 border border-white/5"
                autoFocus
                aria-label="Admin password"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-[0.2em] hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Verifying...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
