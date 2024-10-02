'use client';
import React from 'react';
import { useAutocomplete } from '../hooks/useAutocomplete';
import AutocompleteInputUI from '../ui/AutocompleteInputUI';
import { AutoCompleteProps } from '../types';

export const AutocompleteInput = ({ placeholder, ...hookProps }: AutoCompleteProps) => {
	const data = useAutocomplete({ ...hookProps });
	return <AutocompleteInputUI placeholder={placeholder} {...data} />;
};
