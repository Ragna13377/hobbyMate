import React, { ChangeEvent, KeyboardEvent } from 'react';

export type TFetchDataFunction = (query: string) => Promise<string[]>;
export type AutoCompleteProps = {
	fetchData: TFetchDataFunction;
	name: string;
	initialValue?: string;
	placeholder?: string;
	formChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	formBlur?: () => void;
	hasBadges?: boolean;
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
