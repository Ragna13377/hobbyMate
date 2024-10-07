import { TTimeout } from '@shared/types';
import { ZodSchema } from 'zod';
import { defaultFetchRaceTimeout } from '@shared/constants';

type TGuardedFetch<S, R> = {
	requestFn: () => Promise<R>;
	schema: ZodSchema<S>;
	fromPrisma?: boolean;
	timeout?: number;
};

export const guardedFetch = async <S, R = Response>({
	requestFn,
	schema,
	fromPrisma = false,
	timeout = defaultFetchRaceTimeout,
}: TGuardedFetch<S, R>): Promise<S | undefined> => {
	let timerId: TTimeout = null;
	try {
		const response = (await Promise.race([
			requestFn(),
			new Promise((_, reject) => {
				timerId = setTimeout(() => {
					reject(new Error('Request timed out'));
				}, timeout);
			}),
		])) as Response;
		if (fromPrisma) return schema.parse(response);
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

export const handleResponse = async (response: Response): Promise<unknown> => {
	if (!response.ok)
		throw new Error(`Request failed. Status: ${response.status}. ${response.statusText}`);
	return response.json();
};
