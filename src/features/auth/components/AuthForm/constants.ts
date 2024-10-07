import { TAuthField } from '@features/auth/components/types';
import { AuthSchemaProps } from '@features/auth/components/AuthForm/shema';

export const authProgressShift = 10;
export const defaultAuthValues: AuthSchemaProps = {
	username: 'abs',
	password: '12345678aA',
	repeatPassword: '12345678aA',
	country: '',
	city: '',
	hobbies: '',
	// hobbies: [''],
};

export const buttonLabels = ['Get started', undefined, undefined, 'Join the Fun!'];
export const stepDescriptions = [
	undefined,
	'Dont forget to set up security options in the account settings.',
	"Specify where you'd like to search.",
	'Add some of your favorite hobbies.',
];
export const inputFields: Omit<TAuthField<AuthSchemaProps>, 'fetchData'>[][] = [
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
