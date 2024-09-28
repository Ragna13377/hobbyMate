import NextAuth from 'next-auth';
import { signIn as nextSignIn } from 'next-auth/react';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import { providers } from '@features/auth/constants';
import { TProvider } from '@features/auth/types';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [GitHub(providers.github), Google(providers.google)],
	secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
});

export const handleSignIn = async (provider: TProvider) => {
	try {
		await nextSignIn(provider, { redirect: true });
	} catch (error) {
		console.error('OAuth sign-in error:', error);
	}
};
