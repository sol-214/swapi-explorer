import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_COOKIE_KEY = 'auth';
const AUTH_REDIRECT_URL = '/auth';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has(AUTH_COOKIE_KEY);

  return isAuthenticated
    ? NextResponse.next()
    : NextResponse.redirect(new URL(AUTH_REDIRECT_URL, request.url));
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|auth).*)',
};
