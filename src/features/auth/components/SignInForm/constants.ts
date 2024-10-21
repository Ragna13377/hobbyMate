import { TFormStep } from '@entities/MultiStepForm/types';
import { SignInSchemaResponse } from './schema';

export const signInFormInitialValues: Partial<SignInSchemaResponse> = {
	name: '',
	password: '',
};
export const signInStepFields: TFormStep<SignInSchemaResponse>[] = [
	[
		{
			name: 'name',
			htmlAutoComplete: 'username',
		},
		{
			name: 'password',
			type: 'password',
			htmlAutoComplete: 'current-password',
		},
	],
];
