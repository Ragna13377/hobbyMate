import { defaultDebounceDelay } from '@shared/constants';
import { TTimeout } from '@shared/types';

export const debounceWithAbort = <
	F extends (signal: AbortSignal, query: string, params?: Record<string, string>) => ReturnType<F>,
>(
	fn: F,
	delay: number = defaultDebounceDelay
): ((query: string, params?: Record<string, string>) => Promise<ReturnType<F>>) => {
	let timeout: TTimeout = null;
	let controller: AbortController | null = null;
	return function (query, params?): Promise<ReturnType<F>> {
		if (timeout !== null) clearTimeout(timeout);
		if (controller !== null) controller.abort();
		controller = new AbortController();
		const signal = controller.signal;
		return new Promise((resolve) => {
			timeout = setTimeout(() => resolve(fn(signal, query, params)), delay);
		});
	};
};
