import React from 'react';
import Link from 'next/link';
import { capitalize } from '@shared/utils/stringUtils';
import ButtonWithImage from '@shared/ui/ButtonWithImage';
import { imageSize, oauthButtons } from './constants';
import { handleSignIn } from './utils';

export type OauthProps = {
	showAcknowledgment?: boolean;
};

export const Oauth = ({ showAcknowledgment = true }: OauthProps) => (
	<>
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
		{showAcknowledgment && (
			<small className='text-muted text-xs text-center'>
				Click “Sign in” to agree to{' '}
				<Link href='/terms-of-service' className='underline-default'>
					Terms of Service
				</Link>{' '}
				and acknowledge that{' '}
				<Link href='/privacy-policy' className='underline-default'>
					Privacy Policy
				</Link>{' '}
				applies to you.
			</small>
		)}
	</>
);
