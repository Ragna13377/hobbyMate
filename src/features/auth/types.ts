import { providers } from '@features/auth/constants';

export type TProvider = keyof typeof providers;

export type TFetchLocation = {
	query: string;
};
