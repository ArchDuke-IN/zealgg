import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">
      <div>ZEAL MEDIA / {new Date().getFullYear()}</div>
      <div className="mt-4 md:mt-0 flex gap-8 flex-wrap justify-center">
        <Link href="/about" className="hover:text-white transition-colors duration-500">About</Link>
        <Link href="/services" className="hover:text-white transition-colors duration-500">Services</Link>
        <Link href="/insights" className="hover:text-white transition-colors duration-500">Insights</Link>
        <Link href="/privacy" className="hover:text-white transition-colors duration-500">Privacy</Link>
        <Link href="/terms" className="hover:text-white transition-colors duration-500">Terms</Link>
      </div>
    </footer>
  )
}
