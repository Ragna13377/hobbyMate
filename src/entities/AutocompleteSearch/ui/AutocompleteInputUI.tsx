import React from 'react';
import { AutoCompleteUIProps } from '@entities/AutocompleteSearch/types';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '@shared/ui/Command';
import { cn } from '@shared/lib/tailwind';

const AutocompleteInputUi = ({
	searchValue,
	searchResult,
	showHints,
	handleHintSelect,
	handleFocus,
	handleBlur,
	handleKeyDown,
	handleInput,
	placeholder,
}: AutoCompleteUIProps) => (
	<Command loop isAutocomplete>
		<CommandInput
			placeholder={placeholder}
			value={searchValue}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onKeyDown={handleKeyDown}
			onInput={handleInput}
		/>
		<CommandList className={cn(showHints && searchResult.length > 0 ? 'border-2' : 'border-0')}>
			{searchResult.length > 0 && showHints && searchValue && (
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
);

export default AutocompleteInputUi;
