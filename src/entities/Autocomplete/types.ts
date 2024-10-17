import React, { ChangeEvent, KeyboardEvent } from 'react';
import { TFetchDataFunction } from '@shared/types';

export type AutocompleteProps = {
	fetchData: TFetchDataFunction;
	name: string;
	initialValue?: string;
	placeholder?: string;
	formChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	formBlur?: () => void;
};

export type AutocompleteUIProps = {
	searchValue: string;
	searchResult: string[];
	showHints: boolean;
	handleFocus: () => void;
	handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
	handleKeyDown: (e: KeyboardEvent) => void;
	handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
	handleHintSelect: (e: string) => void;
	placeholder?: string;
};
