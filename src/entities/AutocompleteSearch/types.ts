import React, { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import { TAuthFields } from '@entities/OauthDialog/types';

export type AutoCompleteProps = {
	name: keyof TAuthFields;
	initialValue?: string;
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleBlur?: () => void;
};

export type AutoCompleteUIProps = {
	searchValue: string;
	searchResult: string[];
	showHints: boolean;
	onFocus: (e: FocusEvent<HTMLInputElement>) => void;
	onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
	onMouseDown: () => void;
	onMouseUp: () => void;
	onKeyDown: (e: KeyboardEvent) => void;
	onInput: (e: ChangeEvent<HTMLInputElement>) => void;
	onHintSelect: (e: string) => void;
	placeholder?: string;
};
