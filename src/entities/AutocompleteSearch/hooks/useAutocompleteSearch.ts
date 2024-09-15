import { ChangeEvent, useEffect, useState } from 'react';
import { mockFetchCity } from '@features/auth/model/mocks/mockFetchCity';
import { debouncedFetchLocation } from '@entities/AutocompleteSearch/models/AutocompleteInput';

export const useAutocompleteSearch = () => {
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState<string[]>([]);
	const [shouldSearch, setShouldSearch] = useState(false);
	useEffect(() => {
		// if (location) fetchLocation(location).then((data) => console.log(data));
		if (searchValue && shouldSearch) {
			debouncedFetchLocation(searchValue, setSearchResult);
		} else setSearchResult([]);
	}, [searchValue, shouldSearch]);
	useEffect(() => {
		mockFetchCity().then((data) => data && setSearchValue(data.city ?? ''));
	}, []);
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		setShouldSearch(true);
		setSearchValue(e.target.value);
	};
	return {
		searchValue,
		setSearchValue,
		searchResult,
		handleInput,
	};
};
