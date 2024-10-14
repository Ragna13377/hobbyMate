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
	adapter: PrismaAdapter(prisma),
	secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
});
