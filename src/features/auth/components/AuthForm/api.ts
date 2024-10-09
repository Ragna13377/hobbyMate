import { debounceWithAbort } from '@entities/Autocomplete/utils';
import { parseCity } from '@features/auth/utils/parseUtils';
import { fetchLocationByQuery } from '@features/auth/model/fetchLocationByQuery';
import { fetchCountryByName, fetchCountryByQuery } from '@features/auth/model/fetchCountryByQuery';
import { fetchHobby } from '@features/auth/model/fetchHobby';

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

export const getHobby = debounceWithAbort(async (query) => {
	const data = await fetchHobby({ query });
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
