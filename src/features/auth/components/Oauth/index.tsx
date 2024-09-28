import React from 'react';
import { imageSize, oauthButtons } from '@features/auth/components/Oauth/constants';
import ButtonWithImage from '@shared/ui/ButtonWithImage';
import { handleSignIn } from '@features/auth/components/Oauth/utils';
import { capitalize } from '@shared/utils/stringUtils';

export const Oauth = () => (
	<div className='flex flex-col gap-5'>
		{oauthButtons.map(({ image, provider }) => (
			<ButtonWithImage
				key={provider}
				image={image}
				imageSize={imageSize}
				onClick={() => handleSignIn(provider)}
			>
				Start with {capitalize(provider)}
			</ButtonWithImage>
		))}
	</div>
);
