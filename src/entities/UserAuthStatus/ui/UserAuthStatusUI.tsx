import React from 'react';
import { UserAuthStatusUIProps } from '../types';
import Loader from '@shared/ui/Loader';
import NavBar from '@shared/ui/NavBar';
import { DialogContainer } from '@entities/DialogContainer';
import SignUpForm from '@features/auth/components/SignUpForm';

const UserAuthStatusUI = ({ status }: UserAuthStatusUIProps) => {
	switch (status) {
		case 'loading':
			return <Loader />;
		case 'authenticated':
			return <NavBar.Link href='/profile' />;
		default:
			return (
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
			);
	}
};

export default UserAuthStatusUI;
