import { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import prisma from '@shared/lib/prisma';
import { providers } from './constants';
import { comparePassword } from './utils/cryptUtils';

export default {
	providers: [
		GitHub(providers.github),
		Google(providers.google),
		Credentials({
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				// csrf callback
				if (!credentials.username || !credentials.password) {
					return null;
				}
				const { username, password } = credentials as { username: string; password: string };
				const user = await prisma.user.findUnique({
					where: { username },
				});
				if (!user || !(await comparePassword(password, user.password))) {
					return null;
				}
				console.log('authorize: user', user);
				return { username: user.username, id: user.id };
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, account, profile }) {
			console.log('jwt:token', token);
			console.log('jwt:user', user);
			console.log('jwt:account', account);
			console.log('jwt:profile', profile);
			return { ...token, ...user };
		},
		async session({ session, token, user }) {
			console.log('session:session', session);
			console.log('session:token', token);
			console.log('session:user', user);
			return { ...session, user: token };
		},
	},
} satisfies NextAuthConfig;
