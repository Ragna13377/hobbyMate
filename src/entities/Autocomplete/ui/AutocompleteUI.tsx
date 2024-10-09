import React, { forwardRef } from 'react';
import { cn } from '@shared/lib/tailwind';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '@shared/ui/Command';
import { AutocompleteUIProps } from '@entities/Autocomplete/types';

const AutocompleteUI = forwardRef<HTMLInputElement, AutocompleteUIProps>(
	(
		{
			searchValue,
			searchResult,
			showHints,
			handleHintSelect,
			handleFocus,
			handleBlur,
			handleKeyDown,
			handleInput,
			placeholder,
		},
		ref
	) => (
		<Command loop isAutocomplete>
			<CommandInput
				placeholder={placeholder}
				value={searchValue}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onKeyDown={handleKeyDown}
				onInput={handleInput}
				ref={ref}
			/>
			<CommandList
				className={cn(
					showHints && searchResult.length > 0 && searchValue ? 'border-2' : 'border-0'
				)}
			>
				{searchResult.length > 0 && showHints && (
					<CommandGroup>
						{searchResult.map((sR) => (
							<CommandItem
								key={sR}
								onMouseDown={() => handleHintSelect(sR)}
								onSelect={handleHintSelect}
							>
								{sR}
							</CommandItem>
						))}
					</CommandGroup>
				)}
			</CommandList>
		</Command>
	)
);

AutocompleteUI.displayName = 'AutocompleteUI';
export default AutocompleteUI;
