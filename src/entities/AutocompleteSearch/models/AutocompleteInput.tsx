'use client';
import React from 'react';
import { useAutocompleteHandlers } from '../hooks/useAutocompleteHandlers';
import { useAutocompleteSearch } from '../hooks/useAutocompleteSearch';
import AutocompleteInputUI from '../ui/AutocompleteInputUI';
import { AutoCompleteProps } from '@entities/AutocompleteSearch/types';

export const AutocompleteInput = ({
	defaultValue,
	placeholder,
}: Pick<AutoCompleteProps, 'defaultValue' | 'placeholder'>) => {
	const { showHints, ...handlers } = useAutocompleteHandlers();
	const { searchValue, setSearchValue, searchResult, onInput } =
		useAutocompleteSearch(defaultValue);
	return (
		<AutocompleteInputUI
			defaultValue={defaultValue}
			searchValue={searchValue}
			searchResult={searchResult}
			showHints={showHints}
			setSearchValue={setSearchValue}
			placeholder={placeholder}
			onInput={onInput}
			{...handlers}
		/>
	);
};
