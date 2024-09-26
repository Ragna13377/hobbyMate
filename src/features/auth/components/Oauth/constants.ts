import gmail from './assets/images/gmail.avif';
import github from './assets/images/github.avif';
import { TOauthButton } from './types';

export const imageSize = 30;
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
