import React from 'react';
import { AutoCompleteProps } from '@entities/AutocompleteSearch/types';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '@shared/ui/Command';

const AutocompleteInputUi = ({
	searchValue,
	setSearchValue,
	searchResult,
	showHints,
	placeholder,
	...handlers
}: AutoCompleteProps) => (
	<Command>
		<CommandInput placeholder={placeholder} value={searchValue} {...handlers} />
		<CommandList>
			{searchResult.length > 0 && showHints && searchValue && (
				<CommandGroup>
					{searchResult.map((sR, index) => (
						<CommandItem
							key={index}
							onMouseDown={() => {
								setSearchValue(sR);
							}}
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
