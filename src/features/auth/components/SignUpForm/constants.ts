import { TFormStep } from '@entities/MultiStepForm/types';
import { SignUpSchemaResponse } from './schema';

export const signUpFormInitialValues: Partial<SignUpSchemaResponse> = {
	name: 'abc',
	password: '12345678aA',
	repeatPassword: '12345678aA',
	country: '',
	city: '',
};

export const signUpStepButtons = ['Get started', null, null, 'Join the Fun!'];
export const signUpStepDescriptions = [
	null,
	'Dont forget to set up security options in the account settings.',
	"Specify where you'd like to search.",
	'Add some of your favorite hobbies.',
];
export const signUpStepFields: TFormStep<SignUpSchemaResponse>[] = [
	[
		{
			name: 'name',
			htmlAutoComplete: 'username',
		},
	],
	[
		{
			name: 'password',
			type: 'password',
			htmlAutoComplete: 'new-password',
		},
		{
			name: 'repeatPassword',
			type: 'password',
			htmlAutoComplete: 'new-password',
		},
	],
	[
		{
			name: 'country',
			autocompleteOptions: {},
		},
		{
			name: 'city',
			autocompleteOptions: {},
		},
	],
	[
		{
			name: 'hobbies',
			placeholder: 'Add hobby with Shift + Enter',
			autocompleteOptions: {
				hasBadges: true,
			},
		},
	],
];
