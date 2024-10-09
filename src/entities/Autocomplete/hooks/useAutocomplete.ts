import { ChangeEvent, KeyboardEvent, useContext, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { capitalize } from '@shared/utils/stringUtils';
import { BadgeContext } from '@shared/providers/BadgeProvider/model/BadgeProvider';
import { AutoCompleteProps } from '../types';
import { latinCharacterPattern, maxHints } from '../constants';
import { regPatternFilter } from '../utils';

export const useAutocomplete = ({
	name,
	initialValue,
	formChange,
	formBlur,
	fetchData,
}: Omit<AutoCompleteProps, 'placeholder' | 'ref'>) => {
	const [showHints, setShowHints] = useState(false);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchValue, setSearchValue] = useState(initialValue || '');
	const [searchResult, setSearchResult] = useState<string[]>([]);
	const formContext = useFormContext();
	const badgeContext = useContext(BadgeContext);
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
		if (!badgeContext) return;
		const isEmptySearch = searchValue === '';
		if (key === 'Backspace' && isEmptySearch) {
			const res = badgeContext.deleteBadge();
			if (formContext) formContext.setValue(name, res);
		} else if (isHotkeyPressed && !isEmptySearch) {
			const res = badgeContext.addBadge(searchValue);
			if (formContext) formContext.setValue(name, res);
			setSearchValue('');
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
		let res: string[] | string;
		if (badgeContext) {
			if (!isHotkeyPressed) {
				res = badgeContext.addBadge(hint);
				if (formContext) formContext.setValue(name, res);
				setSearchValue('');
			}
		} else {
			setSearchValue(hint);
			if (formContext) formContext.setValue(name, hint);
			setShouldSearch(false);
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
