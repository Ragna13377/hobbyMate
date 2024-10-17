import { TAuthStep } from './types';
import { SignUpSchemaProps } from './schema';

export const defaultAuthValues: Partial<SignUpSchemaProps> = {
	username: 'abc',
	password: '12345678aA',
	repeatPassword: '12345678aA',
	country: '',
	city: '',
};

export const buttonTexts = ['Get started', null, null, 'Join the Fun!'];
export const stepDescriptions = [
	null,
	'Dont forget to set up security options in the account settings.',
	"Specify where you'd like to search.",
	'Add some of your favorite hobbies.',
];
export const inputFields: TAuthStep[] = [
	[
		{
			name: 'username',
			autoComplete: 'username',
		},
	],
	[
		{
			name: 'password',
			type: 'password',
			autoComplete: 'new-password',
		},
		{
			name: 'repeatPassword',
			type: 'password',
			autoComplete: 'new-password',
		},
	],
	[
		{
			name: 'country',
			isCommandAutocomplete: true,
		},
		{
			name: 'city',
			isCommandAutocomplete: true,
		},
	],
	[
		{
			name: 'hobbies',
			isCommandAutocomplete: true,
			placeholder: 'Add hobby with Shift + Enter',
			hasBadges: true,
		},
	],
];
