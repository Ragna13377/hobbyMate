'use client';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';

const Profile = () => {
	const { data } = useSession();
	return (
		<div className='max-w-screen-desktop flex flex-col items-center justify-center mx-auto mb-14 pt-[var(--header-offset)]'>
			Hello {data?.user?.name}
			<button className='border' onClick={() => signOut()}>
				Sign Out
			</button>
		</div>
	);
};

export default Profile;
