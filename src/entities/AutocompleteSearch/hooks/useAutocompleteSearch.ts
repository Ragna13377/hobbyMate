import { ChangeEvent, useEffect, useState } from 'react';
import { debouncedAction, searchCity } from '@entities/AutocompleteSearch/utils';
export const useAutocompleteSearch = (defaultValue?: string) => {
	const [searchValue, setSearchValue] = useState(defaultValue || '');
	const [searchResult, setSearchResult] = useState<string[]>([]);
	const [shouldSearch, setShouldSearch] = useState(false);
	useEffect(() => {
		const executeSearch = async () => await searchCity(searchValue);
		if (searchValue && shouldSearch) executeSearch().then((data) => setSearchResult(data));
	}, [searchValue, shouldSearch]);
	const onInput = (e: ChangeEvent<HTMLInputElement>) => {
		setShouldSearch(true);
		setSearchValue(e.target.value);
	};
	return {
		searchValue,
		setSearchValue,
		searchResult,
		onInput,
	};
};
