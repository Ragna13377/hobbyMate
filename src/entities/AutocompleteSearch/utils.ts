import { defaultDebounceDelay } from '@shared/constants';
import { TTimeout } from '@shared/types';
import { ChangeEvent } from 'react';

export const debounceWithAbort = <
	F extends (query: string, signal?: AbortSignal) => Promise<T>,
	T = Awaited<ReturnType<F>>,
>(
	fn: F,
	delay: number = defaultDebounceDelay
): ((query: string) => Promise<T>) => {
	let timeout: TTimeout = null;
	let controller: AbortController | null = null;
	return function (query): Promise<T> {
		if (timeout !== null) clearTimeout(timeout);
		if (controller !== null) controller.abort();
		controller = new AbortController();
		const signal = controller.signal;
		return new Promise((resolve, reject) => {
			timeout = setTimeout(async () => {
				fn(query, signal).then(resolve).catch(reject);
			}, delay);
		});
	};
};

export const regPatternFilter = (
	e: ChangeEvent<HTMLInputElement>,
	pattern: RegExp
): { syntheticEvent: ChangeEvent<HTMLInputElement>; filteredValue: string } => {
	const value = e.target.value;
	const filteredValue = value.replace(pattern, '');
	return { syntheticEvent: { ...e, target: { ...e.target, value: filteredValue } }, filteredValue };
};
