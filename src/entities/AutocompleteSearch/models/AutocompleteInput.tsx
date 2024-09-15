'use client';
import React, { Dispatch, SetStateAction } from 'react';
import { mockFetchCity } from '@features/auth/model/mocks/mockFetchCity';
import { debounceWithAbort } from '@shared/utils/debounce';
import { mockFetchLocation } from '@features/auth/model/mocks/mockFetchLocation';
import { defaultMockStatus } from '@shared/constants';
import { useAutocompleteHandlers } from '../hooks/useAutocompleteHandlers';
import { useAutocompleteSearch } from '../hooks/useAutocompleteSearch';
import AutocompleteInputUI from '../ui/AutocompleteInputUI';

export const debouncedFetchLocation = debounceWithAbort(
	(signal: AbortSignal) =>
		async (text: string, setState: Dispatch<SetStateAction<string[]>>): Promise<void> => {
			const data = await mockFetchLocation({ text, status: defaultMockStatus, signal });
			if (data && data.features.length > 0) {
				const uniqueLocations = new Set();
				const searchResult = data.features.reduce<string[]>(
					(acc, { properties: { city, state, country } }) => {
						if (!city) return acc;
						const key = `${state ?? ''}-${country ?? ''}`;
						if (!uniqueLocations.has(key)) {
							uniqueLocations.add(key);
							const result = [city, state, country].filter(Boolean).join(', ');
							acc.push(result);
						}
						return acc;
					},
					[]
				);
				setState(searchResult);
			}
		}
);
export const AutocompleteInput = () => {
	const { showHints, ...handlers } = useAutocompleteHandlers();
	const { searchValue, setSearchValue, searchResult, handleInput } = useAutocompleteSearch();
	return (
		<AutocompleteInputUI
			searchValue={searchValue}
			searchResult={searchResult}
			showHints={showHints}
			setSearchValue={setSearchValue}
			placeholder='Search for a location'
			onInput={handleInput}
			{...handlers}
		/>
	);
};
