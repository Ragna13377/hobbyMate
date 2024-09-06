import { TTimeout } from '@shared/types';

export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
	fn: F,
	delay: number = 200
): ((...args: Parameters<F>) => void) => {
	let timeout: TTimeout = null;
	return function (...args) {
		if (timeout !== null) clearTimeout(timeout);
		timeout = setTimeout(() => fn(...args), delay);
	};
};
