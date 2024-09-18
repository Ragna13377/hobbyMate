import {
	defaultDebounceDelay,
	defaultMockDelay,
	defaultMockHeaders,
	defaultMockStatus,
	errorStatusThreshold,
} from '@shared/constants';
import { TMockFetch, PropsWithSignal, TTimeout, PropsWithDebounce } from '@shared/types';
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

export const createDebouncedMockFetch = <T>({
	debounceDelay = defaultDebounceDelay,
	...rest
}: PropsWithDebounce<TMockFetch<T>>) => {
	let timeout: TTimeout = null;
	let controller: AbortController | null = null;
	return function (): Promise<T | undefined> {
		if (timeout !== null) clearTimeout(timeout);
		if (controller !== null) controller.abort();
		controller = new AbortController();
		const signal = controller.signal;
		return new Promise((resolve) => {
			timeout = setTimeout(() => {
				resolve(createMockFetch({ signal, ...rest }));
			}, debounceDelay);
		});
	};
};