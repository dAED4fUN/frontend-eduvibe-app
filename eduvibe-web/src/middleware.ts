import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthPresent = request.cookies.has('auth-present');
  const pathname = request.nextUrl.pathname;

  const isAuthRoute = pathname.startsWith('/login') || pathname.startsWith('/signup') || pathname.startsWith('/forgot-password') || pathname.startsWith('/reset-password');
  const isAppRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/admin');

  if (!isAuthPresent && isAppRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuthPresent && isAuthRoute) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};
