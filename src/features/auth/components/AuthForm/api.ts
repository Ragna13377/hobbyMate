import { debounceWithAbort } from '@entities/AutocompleteSearch/utils';
import { mockFetchLocationByQuery } from '@features/auth/model/mocks/mockFetchLocationByQuery';
import { defaultMockStatus } from '@shared/constants';
import { parseCity } from '@features/auth/utils/parseUtils';
import {
	fetchLocationByQuery,
} from '@features/auth/model/fetchLocationByQuery';
import { fetchCountryByName, fetchCountryByQuery } from '@features/auth/model/fetchCityByQuery';

// export const getCityByQuery = debounceWithAbort(async (signal: AbortSignal, query: string) => {
// 	const data = await mockFetchLocationByQuery({ query, status: defaultMockStatus, signal });
// 	return parseCity(data);
// });

// export const mockGetCountryByQuery = debounceWithAbort(
// 	async (signal: AbortSignal, query: string) => {
// 		const data = await mockFetchLocationByQuery({ query, status: defaultMockStatus, signal });
// 		return parseCountry(data);
// 	}
// );

export const getLocationByQuery = debounceWithAbort(async (query, signal) => {
	return await fetchLocationByQuery({
		signal,
		query,
	});
});

export const getCountryByQuery = debounceWithAbort(async (query) => {
	const data = await fetchCountryByQuery({ query });
	return data ? data.map(({ name }) => name) : [];
});

export const getCityByQuery = (currentCountry: string) => async (query: string) => {
	const userCountry = sessionStorage.getItem('userCountryName');
	const locationData = await getLocationByQuery(query);
	if (!userCountry || userCountry !== currentCountry) {
		const countryCode = await fetchCountryByName(currentCountry);
		if (!countryCode) {
			sessionStorage.setItem('userCountryCode', currentCountry);
			sessionStorage.removeItem('userCountryName');
			return parseCity(locationData);
		}
		sessionStorage.setItem('userCountryCode', countryCode.code);
		sessionStorage.setItem('userCountryName', countryCode.name);
		return parseCity(locationData, countryCode.code);
	}
	const userCountryCode = sessionStorage.getItem('userCountryCode');
	return parseCity(locationData, userCountryCode || undefined);
};
