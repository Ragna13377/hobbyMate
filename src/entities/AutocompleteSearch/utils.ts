import { defaultDebounceDelay, defaultMockStatus } from '@shared/constants';
import { TTimeout } from '@shared/types';
import {
	mockFetchLocation,
	mockFetchLocation2
} from '@features/auth/model/mocks/mockFetchLocation';
import { parseCityFromLocation } from '@features/auth/utils/parseCityFromLocation';

const debounceWithAbort = <F extends (signal: AbortSignal, query: string) => ReturnType<F>>(
	fn: F,
	delay: number = defaultDebounceDelay
): ((query: string) => Promise<ReturnType<F>>) => {
	let timeout: TTimeout = null;
	let controller: AbortController | null = null;
	return function (query: string): Promise<ReturnType<F>> {
		if (timeout !== null) clearTimeout(timeout);
		if (controller !== null) controller.abort();
		controller = new AbortController();
		const signal = controller.signal;
		return new Promise((resolve) => {
			timeout = setTimeout(() => resolve(fn(signal, query)), delay);
		});
	};
};

export const debouncedAction = debounceWithAbort(async (signal: AbortSignal, query: string) => {
	const data = await mockFetchLocation({ query, status: defaultMockStatus, signal });
	return parseCityFromLocation(data);
});

export const searchCity = async (query: string) => {
	const handler = mockFetchLocation2({ query, status: defaultMockStatus });
	const data = await handler();
	return parseCityFromLocation(data);
};
