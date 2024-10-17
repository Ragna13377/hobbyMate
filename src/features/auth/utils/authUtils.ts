import { TProvider } from '@features/auth/types';
import { signIn as nextSignIn } from 'next-auth/react';
import { signIn, signOut } from '@features/auth/nextAuth';
import { AuthError } from 'next-auth';
import { logErrorMessage } from '@shared/utils/errorsUtils';

export const handleOAuthSignIn = async (provider: TProvider) => {
	try {
		await signIn(provider, { redirect: true });
	} catch (error) {
		console.error('Sign-in error:', error);
	}
};

export const handleCredentialSignIn = async ({
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
		if (error instanceof AuthError) {
			console.log(error.type, error.message);
		} else logErrorMessage(error);
	}
};
