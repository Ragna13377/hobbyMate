import { ZodSchema } from 'zod';
import { fetchProps, MockFetchParams, mockFetchProps, TTimeout } from '@shared/types';
import {
	defaultMockDelay,
	defaultMockHeaders,
	defaultMockStatus,
	defaultRequestTimeout,
} from '@shared/constants';

export const handleResponse = async (response: Response): Promise<unknown> => {
	if (!response.ok)
		throw new Error(`Request failed. Status: ${response.status}. ${response.statusText}`);
	return response.json();
};

export const guardedFetch = async <T>(
	requestFn: Promise<Response>,
	schema: ZodSchema<T>,
	timeout: number = defaultRequestTimeout
): Promise<T | undefined> => {
	let timerId: TTimeout = null;
	try {
		const response = (await Promise.race([
			requestFn,
			new Promise((_, reject) => {
				timerId = setTimeout(() => {
					reject(new Error('Request timed out'));
				}, timeout);
			}),
		])) as Response;
		return await handleResponse(response).then((data) => schema.parse(data));
	} catch (error: unknown) {
		if (error instanceof Error) console.log(error.message);
		else console.log('Something wrong. Unknown Error');
	} finally {
		if (timerId !== null) clearTimeout(timerId);
	}
};

export const createFetch = async <T>({
	baseUrl,
	params,
	schema,
}: fetchProps<T>): Promise<T | undefined> => {
	const stringifyParams = Object.entries(params).map(([key, value]) => [key, String(value)]);
	const queryParams = new URLSearchParams(stringifyParams).toString();
	return guardedFetch(fetch(`${baseUrl}?${queryParams}`), schema);
};

export const createMockFetch =
	<T>({ mockData, schema }: mockFetchProps<T>) =>
	({
		status = defaultMockStatus,
		delay = defaultMockDelay,
		headers = defaultMockHeaders,
	}: MockFetchParams<T> = {}): Promise<T | undefined> =>
		guardedFetch(
			new Promise<Response>((resolve) => {
				setTimeout(() => {
					resolve(
						new Response(JSON.stringify(mockData), {
							status,
							headers,
						})
					);
				}, delay);
			}),
			schema
		);
