import { THTMLInputType } from '@shared/types';
import { AuthSchemaProps } from '@features/auth/components/AuthForm/shema';

export type TAuthField = {
	name: keyof AuthSchemaProps;
	type?: THTMLInputType;
	placeholder?: string;
	autoComplete?: string;
	isCommandAutocomplete?: boolean;
	hasBadges?: boolean;
};

export type TAuthStep = TAuthField[];