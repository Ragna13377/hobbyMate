import React from 'react';
import { cn } from '@shared/lib/tailwind';
import { Button } from '@shared/ui/Button';
import Loader from '@shared/ui/Loader';
import NavBar from '@shared/ui/NavBar';
import { DialogContainer } from '@entities/DialogContainer';
import { SignUpForm } from '@features/auth/components/SignUpForm';
import { SignInForm } from '@features/auth/components/SignInForm';
import { AuthFormType, UserAuthStatusUIProps } from '../types';

const UserAuthStatusUI = ({ status, currentForm, handleFormChange }: UserAuthStatusUIProps) => {
	switch (status) {
		case 'loading':
			return <Loader />;
		case 'authenticated':
			return <NavBar.Link href='/profile' />;
		default:
			// TODO disabled кнопки при отправке формы
			return (
				<DialogContainer
					title='Start your journey!'
					trigger={{
						text: 'Log in',
						variant: 'link',
						size: 'clear',
					}}
				>
					<div className='flex items-center justify-end gap-0 absolute top-[25px] left-8 bg-muted-foreground'>
						{['Sign In', 'Sign Up'].map((b) => (
							<Button
								key={b}
								variant='link'
								size='sm'
								disabled={currentForm === b}
								className={cn(currentForm === b && 'underline', 'rounded-none')}
								onClick={() => handleFormChange(b as AuthFormType)}
							>
								{b}
							</Button>
						))}
					</div>
					{currentForm === 'Sign Up' ? <SignUpForm /> : <SignInForm />}
				</DialogContainer>
			);
	}
};

export default UserAuthStatusUI;
