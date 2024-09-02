'use client';
// import React from 'react';
// import { signIn } from '@app/auth';
//
// const OauthAuthorization = () => (
// 	<div>
// 		<form
// 			action={async () => {
// 				'use server';
// 				await signIn('google');
// 			}}
// 		>
// 			<button type='submit'>Start with Google</button>
// 		</form>
// 		<form
// 			action={async () => {
// 				'use server';
// 				await signIn('github');
// 			}}
// 		>
// 			<button type='button'>Start with GitHub</button>
// 		</form>
// 	</div>
// );
//
// export default OauthAuthorization;

import React from 'react';
import gmail from './assets/images/gmail.avif';
import github from './assets/images/github.avif';
import { OauthButton } from '@entities/OauthDialog/components/OauthButton';
import { capitalize } from '@shared/lib/textUtils';
import { TProvider } from '@app/auth/types';
// TODO: проверить работоспособность клиентского компонента и убрать данный
const OauthAuthorization = () => {
	const buttons: { image: string; provider: TProvider }[] = [
		{
			image: gmail,
			provider: 'google',
		},
		{
			image: github,
			provider: 'github',
		},
	];
	return (
		<div className='flex flex-col gap-5'>
			{buttons.map(({ image, provider }) => (
				<OauthButton key={provider} image={image} size={30} provider={provider}>
					Start with {capitalize(provider)}
				</OauthButton>
			))}
		</div>
	);
};

export default OauthAuthorization;
