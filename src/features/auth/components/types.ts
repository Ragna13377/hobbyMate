import { THTMLInputType } from '@shared/types';
import { AuthSchemaProps } from '@features/auth/components/AuthForm/shema';

export type TAuthField = {
	name: keyof AuthSchemaProps;
	type?: THTMLInputType;
	placeholder?: string;
	autoComplete?: string;
	isCommandAutocomplete?: boolean;
	fetchData?: (query: string) => Promise<string[]>;
};

export type TAuthStep = {
	inputFields: TAuthField[];
	description?: string;
	buttonText?: string;
};
