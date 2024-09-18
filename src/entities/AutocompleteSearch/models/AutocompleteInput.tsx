'use client';
import React from 'react';
import { useAutocomplete } from '../hooks/useAutocomplete';
import AutocompleteInputUI from '../ui/AutocompleteInputUI';
import { AutoCompleteProps, AutoCompleteUIProps } from '../types';

export const AutocompleteInput = ({
	placeholder,
	...hookProps
}: Partial<Pick<AutoCompleteUIProps, 'placeholder'>> & AutoCompleteProps) => {
	const data = useAutocomplete(hookProps);
	return <AutocompleteInputUI placeholder={placeholder} {...data} />;
};
