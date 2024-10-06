import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { capitalize } from '@shared/utils/stringUtils';
import { useBadgesContext } from '@shared/providers/BadgeProvider/hooks/useBadgeContext';
import { AutoCompleteProps } from '../types';
import { latinCharacterPattern, maxHints } from '../constants';
import { regPatternFilter } from '../utils';

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
	const badgeContext = useBadgesContext();
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
		if (hasBadges && badgeContext) {
			const isEmptySearch = searchValue === '';
			if (key === 'Backspace' && isEmptySearch) badgeContext.deleteBadge();
			else if (isHotkeyPressed && !isEmptySearch)
				badgeContext.addBadge(searchValue, setSearchValue);
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
		if (hasBadges && badgeContext) {
			if (!isHotkeyPressed) badgeContext.addBadge(hint, setSearchValue);
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
