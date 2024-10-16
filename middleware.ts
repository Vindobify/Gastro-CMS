import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isAdminPath = path.startsWith('/admin')
  const isAuthPath = path === '/login'
  const token = request.cookies.get('token')?.value

  if (isAuthPath && token) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  if (isAdminPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
}