import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@shared/lib/prisma';
import authConfig from './config';

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	...authConfig,
	session: {
		strategy: 'jwt',
	},
	cookies: {
		sessionToken: {
			name: '__Secure-authjs.session-token',
			options: {
				httpOnly: true,
				secure: process.env.NODE_ENV !== 'development',
				sameSite: 'lax',
			}
		}
	},
	adapter: PrismaAdapter(prisma),
	secret: process.env.NEXT_AUTH_SECRET,
});
