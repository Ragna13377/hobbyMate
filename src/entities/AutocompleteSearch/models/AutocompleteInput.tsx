'use client';
import React, { forwardRef } from 'react';
import { AutoCompleteProps } from '../types';
import { useAutocomplete } from '../hooks/useAutocomplete';
import AutocompleteInputUI from '../ui/AutocompleteInputUI';
import { BadgeProvider } from '@shared/providers/BadgeProvider';

export const AutocompleteInput = forwardRef<HTMLInputElement, AutoCompleteProps>(
	({ placeholder, hasBadges, ...hookProps }, ref) => {
		const autocompleteData = useAutocomplete({ hasBadges, ...hookProps });
		return hasBadges ? (
			<BadgeProvider>
				<AutocompleteInputUI placeholder={placeholder} ref={ref} {...autocompleteData} />
			</BadgeProvider>
		) : (
			<AutocompleteInputUI placeholder={placeholder} ref={ref} {...autocompleteData} />
		);
	}
);

AutocompleteInput.displayName = 'AutocompleteInput';
