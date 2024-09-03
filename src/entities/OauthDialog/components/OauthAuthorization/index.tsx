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
import { capitalize } from '@shared/lib/textUtils';
import { TProvider } from '@features/auth/types';
import { handleSignIn } from '@features/auth/auth';
import ButtonWithImage from 'src/shared/ui/ButtonWithImage';
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
				<ButtonWithImage
					key={provider}
					image={image}
					imageSize={30}
					onClick={() => handleSignIn(provider)}
				>
					Start with {capitalize(provider)}
				</ButtonWithImage>
			))}
		</div>
	);
};

export default OauthAuthorization;
