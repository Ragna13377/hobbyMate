import { clsx } from 'clsx';
import React from 'react';
import Link from 'next/link';
import LinkOutlined from '@shared/ui/LinkOutlined/LinkOutlined';

const Header = () => {
	const links = ['About', 'News', 'Sign in'];
	return (
		<header className='fixed z-50 w-full h-[var(--header-height)] py-5 px-0 text-[var(--text-color)] backdrop-blur'>
			<div
				className={clsx(
					'flex items-center justify-between max-w-screen-xl w-full h-full my-0 mx-auto',
				)}
			>
				<Link href='/' className='font-bold text-4xl'>
					Hobby <span className='font-normal italic'>Mate</span>
				</Link>
				<nav>
					<ul className='flex gap-5 text-4xl'>
						{links.map((l) => (
							<li key={l}>
								<LinkOutlined href={l} />
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
