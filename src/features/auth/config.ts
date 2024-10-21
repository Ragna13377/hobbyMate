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
			// first time jwt callback
			// jwt:token {
			// 	name: undefined,
			// 		email: undefined,
			// 		picture: undefined,
			// 		sub: 'cm29r2dhk0003ot9b0jcnniqr'
			// }
			// second time jwt callback
			// jwt:token {
			// 	sub: 'cm299meqf0002ot9ba0nq0s74',
			// 		username: 'abc',
			// 		id: 'cm299meqf0002ot9ba0nq0s74',
			// 		iat: 1728954645,
			// 		exp: 1731546645,
			// 		jti: '515619d6-86d2-4fdd-b6cd-52ffd8fb4792'
			// }
			// only first time jwt callback
			// jwt:user { username: 'abc', id: 'cm29r2dhk0003ot9b0jcnniqr' }
			// jwt:account {
			// 	providerAccountId: 'cm29r2dhk0003ot9b0jcnniqr',
			// 		type: 'credentials',
			// 		provider: 'credentials'
			// }
			//profile undefined
			return { ...token, ...user };
		},
		async session({ session, token, user }) {
			// session:session {
			// 	user: { name: undefined, email: undefined, image: undefined },
			// 	expires: '2024-11-14T01:13:51.457Z'
			// }
			// session:token {
			// 	sub: 'cm29r2dhk0003ot9b0jcnniqr',
			// 		username: 'abc',
			// 		id: 'cm29r2dhk0003ot9b0jcnniqr',
			// 		iat: 1728954831,
			// 		exp: 1731546831,
			// 		jti: 'a36168e0-db94-4280-ac89-54c266802d0f'
			// }
			// session:user undefined
			return { ...session, user: token };
		},
	},
} satisfies NextAuthConfig;
