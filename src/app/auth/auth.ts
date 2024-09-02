import NextAuth from 'next-auth';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import { providers } from '@app/auth/constants';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		GitHub(providers.github),
		Google(providers.google),
	],
	secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
});
