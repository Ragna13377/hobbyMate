import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
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
	let isHotkeyPressed = false;

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
		const { key, shiftKey } = e;
		isHotkeyPressed = key === 'Enter' && shiftKey;
		if (key === 'Tab') {
			setShowHints(false); // allows change focus on next input
			return;
		}
		if (hasBadges) {
			const isEmptySearch = searchValue === '';
			if (key === 'Backspace' && isEmptySearch) deleteBadge();
			else if (isHotkeyPressed && !isEmptySearch) addBadge(searchValue, setSearchValue);
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
			if (!isHotkeyPressed) addBadge(hint, setSearchValue);
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
