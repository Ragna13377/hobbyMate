import React, { forwardRef } from 'react';
import { cn } from '@shared/lib/tailwind';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '@shared/ui/Command';
import { AutoCompleteUIProps } from '@entities/AutocompleteSearch/types';

const AutocompleteInputUi = forwardRef<HTMLInputElement, AutoCompleteUIProps>(
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
								onSelect={(value) => handleHintSelect(value)}
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

AutocompleteInputUi.displayName = 'AutocompleteInputUi';
export default AutocompleteInputUi;
