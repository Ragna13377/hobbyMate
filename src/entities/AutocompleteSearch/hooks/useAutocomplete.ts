import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { AutoCompleteProps } from '@entities/AutocompleteSearch/types';
import { latinCharacterPattern, maxHints } from '@entities/AutocompleteSearch/constants';
import { regPatternFilter } from '@entities/AutocompleteSearch/utils';

export const useAutocomplete = <T>({
	name,
	initialValue,
	formChange,
	formBlur,
	fetchData,
}: Omit<AutoCompleteProps<T>, 'placeholder' | 'ref'>) => {
	const [showHints, setShowHints] = useState(false);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchValue, setSearchValue] = useState(initialValue || '');
	const [searchResult, setSearchResult] = useState<string[]>([]);
	const { setValue } = useFormContext();

	useEffect(() => {
		if (searchValue && shouldSearch) {
			const executeSearch = async () => fetchData(searchValue);
			executeSearch().then((data) => setSearchResult(data.slice(0, maxHints)));
		}
	}, [fetchData, searchValue, shouldSearch]);

	const handleFocus = () => {
		setShowHints(true);
	};
	const handleBlur = () => {
		setShowHints(false);
		formBlur?.();
	};
	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Tab') {
			setSearchResult([]);
			setShowHints(false);
		} else setShowHints(true);
	};
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === '') setShowHints(false);
		else setShouldSearch(true);
		const { syntheticEvent, filteredValue } = regPatternFilter(e, latinCharacterPattern);
		setSearchValue(filteredValue);
		formChange?.(syntheticEvent);
	};
	const handleHintSelect = (hint: string) => {
		setSearchValue(hint);
		setValue(String(name), hint);
		setSearchResult([]);
		setShouldSearch(false);
	};
	return {
		searchValue,
		setSearchValue,
		searchResult,
		showHints,
		handleFocus,
		handleBlur,
		handleKeyDown,
		handleInput,
		handleHintSelect,
	};
};
