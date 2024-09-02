import React from 'react';
import { signIn } from 'next-auth/react';
import { TProvider } from '@app/auth/types';
import { OauthButtonProps } from '@entities/OauthDialog/components/OauthButton/types';
import OauthButtonUI from '@entities/OauthDialog/components/OauthButton/ui/OauthButtonUI';

export const OauthButton = ({ provider, ...rest }: OauthButtonProps) => {
	const handleSignIn = async (provider: TProvider) => {
		try {
			await signIn(provider, { redirect: true }); // Запускаем аутентификацию
		} catch (error) {
			console.error('OAuth sign-in error:', error);
		}
	};
	return <OauthButtonUI onClick={() => handleSignIn(provider)} {...rest} />;
};
