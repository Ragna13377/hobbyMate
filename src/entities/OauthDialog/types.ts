import React from 'react';
import { UseFormReturn } from 'react-hook-form';

export type TAuthFields = {
	username: string;
	password: string;
	repeatPassword: string;
	location: string;
	hobbies: string[];
};
export type AuthDialogUIProps = {
	form: UseFormReturn<
		{
			username: string;
			password: string;
			repeatPassword: string;
			location: string;
			hobbies: [string, ...string[]];
		},
		unknown,
		undefined
	>;
	onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
};
