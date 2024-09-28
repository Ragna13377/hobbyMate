import {
	defaultMockDelay,
	defaultMockHeaders,
	defaultMockStatus,
	errorStatusThreshold,
} from '@shared/constants';
import { TMockFetch, PropsWithSignal } from '@shared/types';
import { guardedFetch } from '@shared/api/helpers';

const createMockResponse = <T>(data: T, status: number, headers: HeadersInit): Response =>
	new Response(status < errorStatusThreshold ? JSON.stringify(data) : null, {
		status,
		headers,
	});

export const createMockFetch = <T>({
	mockData,
	schema,
	status = defaultMockStatus,
	delay = defaultMockDelay,
	headers = defaultMockHeaders,
	signal,
}: PropsWithSignal<TMockFetch<T>>): Promise<T | undefined> =>
	guardedFetch(
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
		schema
	);
