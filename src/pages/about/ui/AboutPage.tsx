'use client';
import React from 'react';
import { useSession } from 'next-auth/react';

export const AboutPage = () => {
	const { data, status } = useSession();
	console.log('about: data', data);
	console.log('about: status', status);
	return (
		<div className='p-40 flex flex-col gap-5 text-center'>
			<div>About</div>
			{status === 'authenticated' ? (
				<button className='border'>Sign out</button>
			) : (
				<button className='border'>Sign In</button>
			)}
		</div>
	);
};
