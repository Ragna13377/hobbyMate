import { THTMLInputType } from '@shared/types';
import { Path } from 'react-hook-form';

export type TAuthField<T> = {
	name: Path<T>;
	type?: THTMLInputType;
	placeholder?: string;
	autoComplete?: string;
	isCommandAutocomplete?: boolean;
	hasBadges?: boolean;
	fetchData?: (query: string) => Promise<string[]>;
};
