import { debounceWithAbort } from '@entities/Autocomplete/utils';
import { filterCity } from '@features/auth/utils/parseUtils';
import { fetchLocationByQuery } from '@features/auth/api/fetchLocationByQuery';
import { fetchCountryByQuery } from '@features/auth/api/fetchCountryByQuery';
import { fetchHobby } from '@features/auth/api/fetchHobby';

// export const getCityByQuery = debounceWithAbort(async (signal: AbortSignal, query: string) => {
// 	const data = await mockFetchLocationByQuery({ query, status: defaultMockStatus, signal });
// 	return filterLocation(data);
// });

// export const mockGetCountryByQuery = debounceWithAbort(
// 	async (signal: AbortSignal, query: string) => {
// 		const data = await mockFetchLocationByQuery({ query, status: defaultMockStatus, signal });
// 		return parseCountry(data);
// 	}
// );

export const getCountryByQuery = debounceWithAbort(
	async (query) => await fetchCountryByQuery({ query })
);

export const getHobby = debounceWithAbort(async (query) => await fetchHobby({ query }));

export const getCityByQuery = debounceWithAbort(async (query, signal) => {
	const result = await fetchLocationByQuery({ signal, query });
	return filterCity(result);
});

// Либо каждая форма уникальна, либо абстракция и без связи между полями
// export const getCityByQueryOld = (currentCountry: string) =>
// 	debounceWithAbort(async (query, signal) => {
// 		const cashedCountry = sessionStorage.getItem('country');
// 		let userCountryCode = sessionStorage.getItem('country_code');
// 		const locationData = await fetchLocationByQuery({
// 			signal,
// 			query,
// 		});
// 		if (cashedCountry !== currentCountry) {
// 			const countryData = await fetchCountryByName(currentCountry);
// 			if (countryData) {
// 				sessionStorage.setItem('country_code', countryData.code);
// 				userCountryCode = countryData.code;
// 			}
// 			sessionStorage.setItem('country', currentCountry);
// 		}
// 		return filterCity(locationData, userCountryCode);
// 	});
