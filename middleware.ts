import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
	const protectedRoutes = ['/profile'];
	const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET, secureCookie: true });
	console.log('Requested URL:', req.nextUrl.pathname);
	console.log('Token:', token);

	if (!token && protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
		return NextResponse.redirect(new URL('/', req.url));
	}

	return NextResponse.next();
}
export const config = {
	matcher: [
		'/((?!^/$|api/auth/session|api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$|.*\\.avif$).*)',
	],
};
