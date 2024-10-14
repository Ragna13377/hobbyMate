import { Path } from 'react-hook-form';
import { THTMLInputType } from '@shared/types';
import { TFetchDataFunction } from '@entities/Autocomplete/types';
import { SignUpSchemaProps } from './schema';

export type FetchFunctionMap<T> = Partial<Record<Path<T>, TFetchDataFunction>>;

export type TAuthField = {
	name: keyof SignUpSchemaProps;
	type?: THTMLInputType;
	placeholder?: string;
	autoComplete?: string;
	isCommandAutocomplete?: boolean;
	hasBadges?: boolean;
};

export type TAuthStep = TAuthField[];
