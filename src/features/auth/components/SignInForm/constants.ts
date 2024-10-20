import { TFormStep } from '@entities/MultiStepForm/types';
import { SignInSchemaResponse } from './schema';

export const signInFormInitialValues: Partial<SignInSchemaResponse> = {
	username: '',
	password: '',
};
export const signInStepFields: TFormStep<SignInSchemaResponse>[] = [
	[
		{
			name: 'username',
			htmlAutoComplete: 'username',
		},
		{
			name: 'password',
			type: 'password',
			htmlAutoComplete: 'current-password',
		},
	],
];
