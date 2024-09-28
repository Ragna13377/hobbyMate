import { TTimeout } from '@shared/types';
import { defaultDebounceDelay } from '@shared/constants';

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
