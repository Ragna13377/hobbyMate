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
				name: { label: 'Name', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials.name || !credentials.password) return null;
				const { name, password } = credentials as { name: string; password: string };
				const user = await prisma.user.findUnique({
					where: { name },
				});
				if (!user || !(await comparePassword(password, user.password!))) return null;
				return { name: user.name, id: user.id };
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, account, profile }) {
			// console.log(token, 'token')
			// console.log(user, 'user')
			// console.log(account, 'account')
			// console.log( profile, 'profile')
			return { ...token, ...user };
		},
		async session({ session, token, user }) {
			// console.log(session, 'session')
			// console.log(token, 'token')
			// console.log(user, 'user')
			return { ...session };
		},
	},
} satisfies NextAuthConfig;
