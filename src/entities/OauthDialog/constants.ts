import { TAuthFields, TAuthStep, TOauthButton } from '@entities/OauthDialog/types';
import gmail from '@entities/OauthDialog/assets/images/gmail.avif';
import github from '@entities/OauthDialog/assets/images/github.avif';

export const defaultAuthValues: TAuthFields = {
	username: '',
	password: '',
	repeatPassword: '',
	location: '',
	hobbies: '',
	// hobbies: [''],
};

export const authFormSteps: TAuthStep[] = [
	{
		inputFields: [
			{
				name: 'username',
			},
		],
		buttonText: 'Get started',
	},
	{
		inputFields: [
			{
				name: 'password',
				type: 'password',
			},
			{
				name: 'repeatPassword',
				type: 'password',
			},
		],
		description: 'Dont forget to set up security options in the account settings.',
	},
	{
		inputFields: [
			{
				name: 'location',
			},
			{
				name: 'hobbies',
			},
		],
		description: 'Select your preferred options to start with. Feel free to modify them anytime.',
		buttonText: 'Join the Fun!',
	},
];

export const oauthButtons: TOauthButton[] = [
	{
		image: gmail,
		provider: 'google',
	},
	{
		image: github,
		provider: 'github',
	},
];
