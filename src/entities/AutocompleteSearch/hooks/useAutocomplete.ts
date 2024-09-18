import React, { ChangeEvent, FocusEvent, KeyboardEvent, useEffect, useState } from 'react';
import { debouncedAction } from '@entities/AutocompleteSearch/utils';
import { useFormContext } from 'react-hook-form';
import { TAuthFields } from '@entities/OauthDialog/types';

export type formHandlers = {
	name: keyof TAuthFields;
	initialValue?: string;
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleBlur?: () => void;
};
export const useAutocomplete = ({ name, initialValue, handleChange, handleBlur }: formHandlers) => {
	const [showHints, setShowHints] = useState(false);
	const [focusFromKeyboard, setFocusFromKeyboard] = useState(false);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchValue, setSearchValue] = useState(initialValue || '');
	const [searchResult, setSearchResult] = useState<string[]>([]);
	const { setValue } = useFormContext();

	useEffect(() => {
		const executeSearch = async () => await debouncedAction(searchValue);
		if (searchValue && shouldSearch) executeSearch().then((data) => setSearchResult(data));
	}, [searchValue, shouldSearch]);

	const onFocus = (e: FocusEvent<HTMLInputElement>) => {
		if (!focusFromKeyboard) e.target.select();
		setShowHints(true);
	};
	const onBlur = () => {
		setShowHints(false);
		handleBlur?.();
	};
	const onMouseDown = () => {
		setFocusFromKeyboard(true);
		setShowHints(true);
	};
	const onMouseUp = () => setFocusFromKeyboard(false);
	const onKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') setShowHints(false);
		else setShowHints(true);
	};
	const onInput = (e: ChangeEvent<HTMLInputElement>) => {
		setShouldSearch(true);
		setSearchValue(e.target.value);
		handleChange?.(e);
	};
	const onHintSelect = (hint: string) => {
		setSearchValue(hint);
		setValue(name, hint);
	};
	return {
		searchValue,
		setSearchValue,
		searchResult,
		showHints,
		onFocus,
		onBlur,
		onMouseDown,
		onMouseUp,
		onKeyDown,
		onInput,
		onHintSelect,
	};
};
