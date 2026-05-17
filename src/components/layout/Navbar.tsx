'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isFloating = pathname === '/'

  if (isFloating) {
    return (
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl px-8 py-4 flex items-center justify-between w-[90%] max-w-4xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <Link href="/" className="text-lg font-bold tracking-tight uppercase leading-none">ZEAL MEDIA</Link>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/70">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                link.href === '/contact' ? 'text-emerald-400' : ''
              } ${pathname === link.href ? 'text-white' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><path d="M4 8h16M4 16h16" /></>}
          </svg>
        </button>
        {mobileOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[80vw] max-w-sm rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 flex flex-col gap-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm uppercase tracking-[0.2em] font-medium py-2 ${
                  pathname === link.href ? 'text-emerald-400' : 'text-white/70 hover:text-white'
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-[#050505]/60 border-b border-white/5">
      <Link href="/" className="text-xl font-medium tracking-tighter text-white">
        ZEAL MEDIA
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors duration-300 ${
              pathname === link.href
                ? 'text-emerald-400'
                : 'text-white/70 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><path d="M4 8h16M4 16h16" /></>}
        </svg>
      </button>
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm uppercase tracking-[0.2em] font-medium py-2 ${
                pathname === link.href ? 'text-emerald-400' : 'text-white/70 hover:text-white'
              } transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
