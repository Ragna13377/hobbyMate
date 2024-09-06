import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { THTMLInputType } from '@shared/types';
import { TProvider } from '@features/auth/types';

export type TOauthButton = {
	image: string;
	provider: TProvider;
};

export type TAuthStep = {
	inputFields: {
		name: keyof TAuthFields;
		placeholder?: string;
		type?: THTMLInputType;
	}[];
	description?: string;
	buttonText?: string;
};

export type TAuthFields = {
	username: string;
	password: string;
	repeatPassword: string;
	location: string;
	// hobbies: string[];
	hobbies: string;
};
export type AuthDialogUIProps = {
	form?: UseFormReturn<
		{
			username: string;
			password: string;
			repeatPassword: string;
			location: string;
			// hobbies: [string, ...string[]];
			hobbies: string;
		},
		unknown,
		undefined
	>;
	onSubmit?: (e?: React.BaseSyntheticEvent) => Promise<void>;
};
