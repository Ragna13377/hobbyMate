import { debounceWithAbort } from '@entities/Autocomplete/utils';
import { filterLocation } from '@features/auth/utils/parseUtils';
import { fetchLocationByQuery } from '@features/auth/api/fetchLocationByQuery';
import { fetchCountryByName, fetchCountryByQuery } from '@features/auth/api/fetchCountryByQuery';
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

export const getLocationByQuery = debounceWithAbort(
	async (query, signal) =>
		await fetchLocationByQuery({
			signal,
			query,
		})
);

export const getCountryByQuery = debounceWithAbort(
	async (query) => await fetchCountryByQuery({ query })
);

export const getHobby = debounceWithAbort(async (query) => await fetchHobby({ query }));

export const getCityByQuery = (currentCountry: string) =>
	debounceWithAbort(async (query: string) => {
		const userCountry = sessionStorage.getItem('userCountryName');
		const locationData = await getLocationByQuery(query);
		if (!userCountry || userCountry !== currentCountry) {
			const countryCode = await fetchCountryByName(currentCountry);
			if (!countryCode) {
				sessionStorage.setItem('userCountryCode', currentCountry);
				sessionStorage.removeItem('userCountryName');
				return filterLocation(locationData);
			}
			sessionStorage.setItem('userCountryCode', countryCode.code);
			sessionStorage.setItem('userCountryName', countryCode.name);
			return filterLocation(locationData, countryCode.code);
		}
		const userCountryCode = sessionStorage.getItem('userCountryCode');
		return filterLocation(locationData, userCountryCode || undefined);
	});
