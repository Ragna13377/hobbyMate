import React from 'react';
import { AutoCompleteUIProps } from '@entities/AutocompleteSearch/types';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '@shared/ui/Command';

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
		<CommandList>
			{searchResult.length > 0 && showHints && searchValue && (
				<CommandGroup>
					{searchResult.map((sR, index) => (
						<CommandItem
							key={index}
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
