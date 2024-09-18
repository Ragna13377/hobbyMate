import React from 'react';
import { AutoCompleteUIProps } from '@entities/AutocompleteSearch/types';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '@shared/ui/Command';

const AutocompleteInputUi = ({
	searchValue,
	searchResult,
	showHints,
	placeholder,
	onHintSelect,
	...handlers
}: AutoCompleteUIProps) => (
	<Command>
		<CommandInput placeholder={placeholder} value={searchValue} {...handlers} />
		<CommandList>
			{searchResult.length > 0 && showHints && searchValue && (
				<CommandGroup>
					{searchResult.map((sR, index) => (
						<CommandItem
							key={index}
							onMouseDown={() => onHintSelect(sR)}
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
