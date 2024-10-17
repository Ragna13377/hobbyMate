import {
	defaultMockDelay,
	defaultMockHeaders,
	defaultMockStatus,
	errorStatusThreshold,
} from '@shared/constants';
import { PropsWithSignal, TFetchParams } from '@shared/types';
import { guardedFetch } from '@shared/api/helpers';
import { ZodSchema } from 'zod';

type TMockFetch<T> = TFetchParams & {
	mockData: T;
	schema: ZodSchema<T>;
};

export const createMockFetch = <T>({
	mockData,
	schema,
	status = defaultMockStatus,
	delay = defaultMockDelay,
	headers = defaultMockHeaders,
	signal,
}: PropsWithSignal<TMockFetch<T>>): Promise<T | undefined> =>
	guardedFetch({
		requestFn: () =>
			new Promise<Response>((resolve, reject) => {
				setTimeout(() => {
					if (signal?.aborted) {
						reject(
							process.env.NODE_ENV === 'development' ? new Error('Request was aborted') : undefined
						);
					}
					const response = createMockResponse(mockData, status, headers);
					if (status < errorStatusThreshold) resolve(response);
					else reject(response);
				}, delay);
			}),
		schema,
	});

const createMockResponse = <T>(data: T, status: number, headers: HeadersInit): Response =>
	new Response(status < errorStatusThreshold ? JSON.stringify(data) : null, {
		status,
		headers,
	});
