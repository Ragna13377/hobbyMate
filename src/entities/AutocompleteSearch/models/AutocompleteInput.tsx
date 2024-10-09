'use client';
import React, { forwardRef } from 'react';
import { AutoCompleteProps } from '../types';
import { useAutocomplete } from '../hooks/useAutocomplete';
import AutocompleteInputUI from '../ui/AutocompleteInputUI';

export const AutocompleteInput = forwardRef<HTMLInputElement, AutoCompleteProps>(
	({ placeholder, ...hookProps }, ref) => {
			const autocompleteData = useAutocomplete({ ...hookProps });
			return <AutocompleteInputUI placeholder={placeholder} ref={ref} {...autocompleteData} />
	}
);
