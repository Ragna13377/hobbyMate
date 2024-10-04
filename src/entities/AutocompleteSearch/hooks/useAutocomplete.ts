import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { AutoCompleteProps } from '@entities/AutocompleteSearch/types';
import { latinCharacterPattern, maxHints } from '@entities/AutocompleteSearch/constants';
import { regPatternFilter } from '@entities/AutocompleteSearch/utils';
import { capitalize } from '@shared/utils/stringUtils';
import { useBadgesContext } from '@shared/providers/hooks/useBadgeContext';

export const useAutocomplete = ({
	name,
	initialValue,
	formChange,
	formBlur,
	fetchData,
	hasBadges = false,
}: Omit<AutoCompleteProps, 'placeholder' | 'ref'>) => {
	const [showHints, setShowHints] = useState(false);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchValue, setSearchValue] = useState(initialValue || '');
	const [searchResult, setSearchResult] = useState<string[]>([]);
	const { addBadge, deleteBadge } = useBadgesContext();
	const formContext = useFormContext();

	useEffect(() => {
		if (shouldSearch && searchValue) {
			const executeSearch = async () => fetchData(capitalize(searchValue));
			executeSearch().then((data) => {
				setSearchResult(data.slice(0, maxHints));
			});
		}
	}, [fetchData, searchValue, shouldSearch]);

	const handleFocus = () => setShowHints(true);
	const handleBlur = () => {
		setShowHints(false);
		formBlur?.();
	};
	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Tab')
			setShowHints(false); // allows change focus on next input
		else if (hasBadges && searchValue === '' && e.key === 'Backspace') deleteBadge();
		if (hasBadges && e.key === 'Enter' && searchResult.length === 0 && searchValue !== '') {
			addBadge(searchValue, setSearchValue);
			setSearchResult([]);
		}
	};
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		setShouldSearch(true);
		setShowHints(true);
		if (e.target.value === '') {
			setShowHints(false);
			setSearchResult([]);
		}
		const { syntheticEvent, filteredValue } = regPatternFilter(e, latinCharacterPattern);
		setSearchValue(filteredValue);
		formChange?.(syntheticEvent);
	};
	const handleHintSelect = (hint: string) => {
		if (hasBadges) {
			addBadge(hint, setSearchValue);
			setSearchValue('');
		} else {
			setSearchValue(hint);
			setShouldSearch(false);
			if (formContext) formContext.setValue(String(name), hint);
			setShowHints(false);
		}
		setSearchResult([]);
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
