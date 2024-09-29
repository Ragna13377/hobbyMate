import React, { ChangeEvent, KeyboardEvent } from 'react';

export type AutoCompleteProps<T> = {
	fetchData: (query: string, params?: Record<string, string>) => Promise<Promise<string[]>>;
	name: keyof T;
	initialValue?: string;
	placeholder?: string;
	formChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	formBlur?: () => void;
};

export type AutoCompleteUIProps = {
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
