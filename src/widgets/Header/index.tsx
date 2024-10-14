import React from 'react';
import Link from 'next/link';
import { cn } from '@shared/lib/tailwind';
import NavBar from '@shared/ui/NavBar';
import DialogContainer from '@entities/DialogContainer/model/DialogContainer';
import SignUpForm from '@features/auth/components/SignUpForm';

const Header = () => (
	<header className='fixed z-50 w-full h-[var(--header-height)] py-5 backdrop-blur-sm'>
		<div
			className={cn(
				'flex items-center justify-between max-w-screen-xl w-full h-full my-0 mx-auto px-12'
			)}
		>
			<Link href='/' className='font-bold text-4xl px-1'>
				Hobby<span className='font-normal italic'>Mate</span>
			</Link>
			<NavBar
				navElements={[
					{ href: 'about' },
					{ href: 'news' },
					{
						children: (
							<DialogContainer
								title='Start your journey!'
								trigger={{
									text: 'Log in',
									variant: 'link',
									size: 'clear',
								}}
							>
								<SignUpForm />
							</DialogContainer>
						),
					},
				]}
			/>
		</div>
	</header>
);

export default Header;
