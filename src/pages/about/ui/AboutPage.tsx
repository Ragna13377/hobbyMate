'use client';
import { KeyboardEvent, ChangeEvent, useCallback, useEffect, useState } from 'react';
import { mockFetchCity } from '@features/auth/model/mocks/mockFetchCity';
import { debounce } from '@shared/utils/debounce';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '@shared/ui/Command';
import { fetchLocation } from '@features/auth/model/fetchLocation';
import { mockFetchLocation } from '@features/auth/model/mocks/mockFetchLocation';
const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
const baseUrl = 'https://api.geoapify.com/v1/geocode/search';

export function AboutPage() {
	const [locations, setLocations] = useState('');
	// const [initLocation, setInitLocation] = useState(false);
	const [searchResults, setSearchResults] = useState<string[]>([]);
	// const [toggleHints, setToggleHints] = useState(false);

	// const onEsc = (e: KeyboardEvent) => {
	// 	if (e.key === 'Escape') setToggleHints(false);
	// 	setSearchResults([]);
	// };
	// const onBlur = () => {
	// 	setToggleHints(false);
	// };
	// const onFocus = () => {
	// 	setToggleHints(true);
	// };
	// const fetchLocations = useCallback(
	// 	debounce(async (text: string) => {
	// 		fetch(`${baseUrl}?text=${text}&apiKey=${apiKey}`)
	// 			.then((res) => res.json())
	// 			.then((data) => {
	// 				if (data.features.length > 0) {
	// 					const groupedLocation = new Set();
	// 					const locations: string[] = data.features.map(
	// 						({
	// 							properties: { city, state, country },
	// 						}: {
	// 							properties: { city: string; state: string; country: string };
	// 						}) => {
	// 							const key = `${state}-${country}`;
	// 							if (!groupedLocation.has(key) && city) {
	// 								groupedLocation.add(key);
	// 								return `${city ?? ''}, ${state ?? ''}, ${country ?? ''}`;
	// 							}
	// 						}
	// 					);
	// 					setSearchResults(locations);
	// 					// setToggleHints(true);
	// 				}
	// 			});
	// 	}),
	// 	[]
	// );
	useEffect(() => {
		// if (locations && !initLocation) debouncedF(locations);
		// // if (locations) fetchLocation(locations).then((data) => console.log(data));
		if (locations) {
			mockFetchLocation(locations).then((data) => console.log(data));
		} else setSearchResults([]);
		// }, [initLocation, debouncedF, locations]);
	}, [locations]);
	useEffect(() => {
		// mockFetchCity().then((data) => data && setLocations(data.city ?? ''));
		// setInitLocation(true);
	}, []);
	return (
		<>
			<Command>
				<CommandInput
					// onFocus={onFocus}
					// onBlur={onBlur}
					// onKeyDown={(e: KeyboardEvent) => onEsc(e)}
					placeholder='Search for a location'
					value={locations}
					onInput={(e: ChangeEvent<HTMLInputElement>) => {
						// setInitLocation(false);
						setLocations(e.target.value);
					}}
				/>
				<CommandList>
					{/*{searchResults.length > 0 && toggleHints && (*/}
					<CommandGroup>
						{searchResults.map((s, index) => (
							<CommandItem
								key={index}
								onMouseDown={() => {
									setLocations(s);
									// setInitLocation(true);
								}}
							>
								{s}
							</CommandItem>
						))}
					</CommandGroup>
					{/*)}*/}
				</CommandList>
			</Command>
		</>
	);
}
