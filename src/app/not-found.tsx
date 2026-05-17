import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-[#050505] text-white px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-bold tracking-tighter mb-4 text-emerald-400">404</h1>
        <h2 className="text-2xl font-semibold tracking-tight mb-4">Page Not Found</h2>
        <p className="text-slate-400 text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Explore our services or read our latest insights.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:border-white/40 transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="/insights"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:border-white/40 transition-colors"
          >
            Read Insights
          </Link>
        </div>
      </div>
    </div>
  )
}
