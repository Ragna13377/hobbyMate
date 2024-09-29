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
					// TODO: test
					// if (signal?.aborted) reject();
					if (signal?.aborted) reject(new Error('Request was aborted'));
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
