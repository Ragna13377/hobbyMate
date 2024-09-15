import { TTimeout } from '@shared/types';
import { defaultDebounceDelay } from '@shared/constants';

// Невозможно типизировать 2 сигнатуры с каррированием и без в общей функции
export const debounceWithAbort = <
	F extends (signal: AbortSignal) => (...args: Parameters<ReturnType<F>>) => void,
>(
	fn: F,
	delay: number = defaultDebounceDelay
): ((...args: Parameters<ReturnType<F>>) => void) => {
	let timeout: TTimeout = null;
	let controller: AbortController | null = null;
	return function (...args) {
		if (timeout !== null) clearTimeout(timeout);
		if (controller !== null) controller.abort();
		controller = new AbortController();
		const signal = controller.signal;
		timeout = setTimeout(() => fn(signal)(...args), delay);
	};
};

export const debounce = <F extends (...args: Parameters<F>) => void>(
	fn: F,
	delay: number = defaultDebounceDelay
): ((...args: Parameters<F>) => void) => {
	let timeout: TTimeout = null;
	return function (...args) {
		if (timeout !== null) clearTimeout(timeout);
		timeout = setTimeout(() => fn(...args), delay);
	};
};
