import { TProvider } from '@features/auth/types';
import { signIn as nextSignIn } from 'next-auth/react';
import { signIn } from '@features/auth/nextAuth';

export const oAuthSignIn = async (provider: TProvider) => {
	try {
		await signIn(provider, { redirect: true });
	} catch (error) {
		console.error('Sign-in error:', error);
	}
};

export const credentialSignIn = async ({
	username,
	password,
}: {
	username: string;
	password: string;
}) => {
	try {
		return await nextSignIn('credentials', {
			username,
			password,
			redirect: false,
		});
	} catch (error) {
		console.error('Sign-up error:', error);
	}
};
