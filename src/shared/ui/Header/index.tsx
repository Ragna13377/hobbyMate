import { clsx } from 'clsx';
import React from 'react';
import Link from 'next/link';
import { NavBar } from '@entities/NavBar';

const Header = () => (
	<header className='fixed z-50 w-full h-[var(--header-height)] py-5 text-[var(--text-color)] backdrop-blur'>
		<div
			className={clsx(
				'flex items-center justify-between max-w-screen-xl w-full h-full my-0 mx-auto px-12'
			)}
		>
			<Link href='/' className='font-bold text-4xl px-1'>
				Hobby <span className='font-normal italic'>Mate</span>
			</Link>
			<NavBar
				navElements={[
					{ href: 'about', type: 'link' },
					{ href: 'news', type: 'link' },
					{ href: 'sign in', type: 'button' },
				]}
			/>
		</div>
	</header>
);

export default Header;
