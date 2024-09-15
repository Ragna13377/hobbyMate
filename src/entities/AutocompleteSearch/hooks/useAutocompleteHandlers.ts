import { FocusEvent, KeyboardEvent, useState } from 'react';

export const useAutocompleteHandlers = () => {
	const [showHints, setShowHints] = useState(false);
	const [focusFromKeyboard, setFocusFromKeyboard] = useState(false);
	const onFocus = (e: FocusEvent<HTMLInputElement>) => {
		if (!focusFromKeyboard) e.target.select();
		setShowHints(true);
	};
	const onBlur = () => setShowHints(false);
	const onMouseDown = () => {
		setFocusFromKeyboard(true);
		setShowHints(true);
	};
	const onMouseUp = () => setFocusFromKeyboard(false);
	const onKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') setShowHints(false);
		else setShowHints(true);
	};
	return {
		showHints,
		onFocus,
		onBlur,
		onMouseDown,
		onMouseUp,
		onKeyDown,
	};
};
