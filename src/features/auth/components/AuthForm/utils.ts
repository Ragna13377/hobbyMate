import { debounceWithAbort } from '@entities/AutocompleteSearch/utils';
import { mockFetchLocationByQuery } from '@features/auth/model/mocks/mockFetchLocationByQuery';
import { defaultMockStatus } from '@shared/constants';
import { parseCity, parseCountry } from '@features/auth/utils/parseUtils';

export const getCityByQuery = debounceWithAbort(async (signal: AbortSignal, query: string) => {
	const data = await mockFetchLocationByQuery({ query, status: defaultMockStatus, signal });
	return parseCity(data);
});

export const getCountryByQuery = debounceWithAbort(async (signal: AbortSignal, query: string) => {
	const data = await mockFetchLocationByQuery({ query, status: defaultMockStatus, signal });
	return parseCountry(data);
});
