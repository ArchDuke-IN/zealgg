'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface FormResponse {
  id: string
  firstName: string
  lastName: string
  email: string
  company: string
  budget: string
  message: string
  submittedAt: string
  ip: string
}

export default function ResponsesClient() {
  const [responses, setResponses] = useState<FormResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<FormResponse | null>(null)

  useEffect(() => {
    fetch('/api/contact')
      .then((res) => res.json())
      .then((data) => {
        setResponses(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleLogout = () => {
    fetch('/api/admin/logout', { method: 'POST' })
      .then(() => {
        window.location.href = '/admin/login'
      })
  }

  const handleDelete = (id: string) => {
    if (!confirm('Delete this response?')) return
    fetch(`/api/contact?id=${id}`, { method: 'DELETE' })
      .then(() => setResponses((prev) => prev.filter((r) => r.id !== id)))
  }

  const handleClearAll = () => {
    if (!confirm('Delete ALL responses? This cannot be undone.')) return
    fetch('/api/contact', { method: 'DELETE' })
      .then(() => setResponses([]))
  }

  if (loading) {
    return (
      <div className="min-h-[100dvh] bg-[#050505] text-white flex items-center justify-center">
        <p className="text-slate-400">Loading responses...</p>
      </div>
    )
  }

  return (
    <div className="min-h-[100dvh] bg-[#050505] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-[#050505]/60 border-b border-white/5">
        <Link href="/" className="text-xl font-medium tracking-tighter text-white">
          ZEAL MEDIA <span className="opacity-40">ADMIN</span>
        </Link>
        <div className="flex gap-4 items-center">
          <button
            onClick={handleLogout}
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300"
          >
            LOGOUT
          </button>
          <Link href="/" className="text-sm font-medium hover:text-white transition-colors duration-300">
            BACK TO SITE
          </Link>
        </div>
      </nav>

      <div className="pt-28 px-6 md:px-12 max-w-7xl mx-auto pb-20">
        <div className="mb-8 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <h3 className="text-emerald-400 font-medium mb-2">Setup Email Notifications</h3>
          <p className="text-slate-400 text-sm">
            Form submissions are now emailed to you instantly. To enable:
          </p>
          <ol className="text-slate-400 text-sm mt-2 space-y-1 list-decimal list-inside">
            <li>Get a free API key at <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">resend.com</a></li>
            <li>Add <code className="bg-white/5 px-1 rounded">RESEND_API_KEY</code> and <code className="bg-white/5 px-1 rounded">NOTIFICATION_EMAIL</code> to your Vercel environment variables</li>
            <li>Redeploy your site</li>
          </ol>
          <p className="text-slate-500 text-xs mt-3">Until then, submissions are stored in memory (visible below during this session only).</p>
        </div>

        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-semibold tracking-tighter text-white">Form Responses</h1>
            <p className="text-slate-400 mt-2">{responses.length} total submissions</p>
          </div>
          {responses.length > 0 && (
            <button
              onClick={handleClearAll}
              className="px-4 py-2 rounded-full border border-red-500/30 text-red-400 text-sm hover:bg-red-500/10 transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        {responses.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-slate-500 text-lg">No form submissions yet.</p>
            <p className="text-slate-600 text-sm mt-2">Responses will appear here when visitors submit the contact form.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {responses.map((r) => (
              <div
                key={r.id}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
                onClick={() => setSelected(selected?.id === r.id ? null : r)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                      {r.firstName.charAt(0)}{r.lastName.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-medium">{r.firstName} {r.lastName}</p>
                      <p className="text-slate-500 text-sm">{r.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-500 text-sm">
                      {new Date(r.submittedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                    {r.budget && <p className="text-emerald-400 text-xs mt-1">{r.budget}</p>}
                  </div>
                </div>

                {selected?.id === r.id && (
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                    {r.company && (
                      <div>
                        <span className="text-slate-500 text-xs uppercase tracking-wider">Company</span>
                        <p className="text-white text-sm mt-1">{r.company}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-slate-500 text-xs uppercase tracking-wider">Message</span>
                      <p className="text-slate-300 text-sm mt-1 whitespace-pre-wrap">{r.message}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-slate-600 text-xs">IP: {r.ip}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDelete(r.id)
                        }}
                        className="px-3 py-1 rounded-full border border-red-500/30 text-red-400 text-xs hover:bg-red-500/10 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
