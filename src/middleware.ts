import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const session = request.cookies.get('admin_session')

    if (!session || session.value !== process.env.ADMIN_PASSWORD) {
      if (request.nextUrl.pathname === '/admin/login') {
        return NextResponse.next()
      }
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
