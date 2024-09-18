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
		autocomplete?: boolean;
	}[];
	description?: string;
	buttonText?: string;
};

export type TAuthFields = {
	username: string;
	password: string;
	repeatPassword: string;
	country: string;
	city: string;
	// hobbies: string[];
	hobbies: string;
};
export type AuthDialogProps = {
	form?: UseFormReturn<TAuthFields, unknown, undefined>;
	onSubmit?: (e?: React.BaseSyntheticEvent) => Promise<void>;
};
