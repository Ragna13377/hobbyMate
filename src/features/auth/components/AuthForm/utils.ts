import { debounceWithAbort } from '@entities/AutocompleteSearch/utils';
import { mockFetchLocationByQuery } from '@features/auth/model/mocks/mockFetchLocationByQuery';
import { defaultMockStatus } from '@shared/constants';
import { parseCity, parseCountry } from '@features/auth/utils/parseUtils';
import { fetchLocationByQuery } from '@features/auth/model/fetchLocationByQuery';

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

export const getCountryByQuery = debounceWithAbort(async (signal, query) => {
	const data = await fetchLocationByQuery({
		signal,
		query,
		params: {
			type: 'country',
		},
	});
	return parseCountry(data);
});

