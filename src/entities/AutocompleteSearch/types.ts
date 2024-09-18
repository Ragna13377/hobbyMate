import { ChangeEvent, Dispatch, FocusEvent, KeyboardEvent, SetStateAction } from 'react';

export type AutoCompleteProps = {
	searchValue: string;
	setSearchValue: Dispatch<SetStateAction<string>>;
	searchResult: string[];
	showHints: boolean;
	onFocus: (e: FocusEvent<HTMLInputElement>) => void;
	onBlur: () => void;
	onMouseDown: () => void;
	onMouseUp: () => void;
	onKeyDown: (e: KeyboardEvent) => void;
	onInput: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	defaultValue?: string;
};
