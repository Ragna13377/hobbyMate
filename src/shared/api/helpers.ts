import { TTimeout } from '@shared/types';
import { ZodSchema } from 'zod';
import { defaultFetchRaceTimeout } from '@shared/constants';

export const handleResponse = async (response: Response): Promise<unknown> => {
	if (!response.ok)
		throw new Error(`Request failed. Status: ${response.status}. ${response.statusText}`);
	return response.json();
};

export const guardedFetch = async <T>(
	requestFn: Promise<Response>,
	schema: ZodSchema<T>,
	timeout: number = defaultFetchRaceTimeout
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
		if (process.env.NODE_ENV === 'development') {
			if (error instanceof Error) console.log(error.message);
			else console.log('Something wrong. Unknown Error');
		}
	} finally {
		if (timerId !== null) clearTimeout(timerId);
	}
};
