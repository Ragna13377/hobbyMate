export const curry =
	<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, length = fn.length) =>
	(...args: Parameters<T> & { length: number }) => {
		if (args.length < length) {
			return curry((...otherArgs) => fn(...args, ...otherArgs), length - args.length);
		}
		return fn(...(args as Parameters<T>));
	};
