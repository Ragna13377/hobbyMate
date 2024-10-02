import { THTMLInputType } from '@shared/types';
import { Path } from 'react-hook-form';

export type TAuthField<T> = {
	name: Path<T>;
	type?: THTMLInputType;
	placeholder?: string;
	autoComplete?: string;
	isCommandAutocomplete?: boolean;
	fetchData?: (query: string) => Promise<string[]>;
};

export type TAuthStep<T> = {
	inputFields: TAuthField<T>[];
	description?: string;
	buttonText?: string;
};
