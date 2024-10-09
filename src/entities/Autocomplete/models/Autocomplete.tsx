'use client';
import React, { forwardRef } from 'react';
import { AutocompleteProps } from '../types';
import { useAutocomplete } from '../hooks/useAutocomplete';
import AutocompleteInputUI from '../ui/AutocompleteUI';

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
	({ placeholder = '', ...hookProps }, ref) => {
			const autocompleteData = useAutocomplete({ ...hookProps });
			return <AutocompleteInputUI placeholder={placeholder} ref={ref} {...autocompleteData} />
	}
);
