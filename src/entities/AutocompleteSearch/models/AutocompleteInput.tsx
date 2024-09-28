'use client';
import React from 'react';
import { useAutocomplete } from '../hooks/useAutocomplete';
import AutocompleteInputUI from '../ui/AutocompleteInputUI';
import { AutoCompleteProps } from '../types';

export const AutocompleteInput = <T,>({ placeholder, ...hookProps }: AutoCompleteProps<T>) => {
	const data = useAutocomplete({ ...hookProps });
	return <AutocompleteInputUI placeholder={placeholder} {...data} />;
};
