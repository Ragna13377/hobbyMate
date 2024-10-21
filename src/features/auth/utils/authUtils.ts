import { AuthError } from 'next-auth';
import { signIn as nextSignIn } from 'next-auth/react';
import { TProvider } from '@features/auth/types';

export const handleOAuthSignIn = async (provider: TProvider) => {
	try {
		const res = await nextSignIn(provider, { redirect: true });
		if (!res || res.error) throw new Error(res?.error || 'Oauth sign in failed');
	} catch (error) {
		handleError(error);
	}
};

export const handleCredentialSignIn = async ({
	name,
	password,
}: {
	name: string;
	password: string;
}) => {
	try {
		const res = await nextSignIn('credentials', {
			name,
			password,
			redirect: false,
		});
		console.log(res);
		if (!res || (res.error && res.code !== 'credentials')) throw new Error('Sign in failed');
		if (res.error && res.code === 'credentials') throw new Error('Incorrect username or password.');
	} catch (error) {
		handleError(error);
	}
};

const handleError = (error: unknown) => {
	const message =
		error instanceof AuthError
			? `${error.type}: ${error.message}`
			: error instanceof Error
				? error.message
				: 'Unexpected sign in error';
	throw new Error(message);
};
