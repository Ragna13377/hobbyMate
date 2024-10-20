import { TSessionStatus } from '@shared/types';

export type AuthFormType = 'Sign In' | 'Sign Up';

export type UserAuthStatusUIProps = {
	status: TSessionStatus;
	currentForm: AuthFormType;
	handleFormChange: (type: AuthFormType) => void;
};
