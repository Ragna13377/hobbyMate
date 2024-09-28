import { THTMLInputType } from '@shared/types';
import { AuthSchemaProps } from '@features/auth/components/AuthForm/shema';

export type TAuthField = {
	name: keyof AuthSchemaProps;
	autoComplete?: string;
	placeholder?: string;
	type?: THTMLInputType;
	isCommandAutocomplete?: boolean;
};

export type TAuthStep = {
	inputFields: TAuthField[];
	description?: string;
	buttonText?: string;
};
