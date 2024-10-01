import { TAuthStep } from '@features/auth/components/types';
import { AuthSchemaProps } from '@features/auth/components/AuthForm/shema';

export const defaultAuthValues: AuthSchemaProps = {
	username: 'abs',
	password: '12345678aA',
	repeatPassword: '12345678aA',
	country: '',
	city: '',
	hobbies: '',
	// hobbies: [''],
};

export const authFormSteps: TAuthStep[] = [
	{
		inputFields: [
			{
				name: 'username',
				autoComplete: 'username',
			},
		],
		buttonText: 'Get started',
	},
	{
		inputFields: [
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
		description: 'Dont forget to set up security options in the account settings.',
	},
	{
		inputFields: [
			{
				name: 'country',
				isCommandAutocomplete: true,
			},
			{
				name: 'city',
				isCommandAutocomplete: true,
			},
		],
		description: "Specify where you'd like to search.",
	},
	{
		inputFields: [
			{
				name: 'hobbies',
			},
		],
		description: 'Add some of your favorite hobbies.',
		buttonText: 'Join the Fun!',
	},
];
