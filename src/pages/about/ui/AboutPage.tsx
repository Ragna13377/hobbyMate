import React from 'react';
import { Oauth } from '@features/auth/components/Oauth';

export const AboutPage = () => {
	return (
		<div className='p-40 flex flex-col gap-5 text-center'>
			<div>About</div>
			<Oauth />
		</div>
	);
};
