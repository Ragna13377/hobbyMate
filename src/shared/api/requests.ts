import { TFetch, PropsWithSignal } from '@shared/types';
import { guardedFetch } from '@shared/api/helpers';

export const createFetch = async <T>({
	baseUrl,
	searchParams,
	schema,
	signal,
}: PropsWithSignal<TFetch<T>>): Promise<T | undefined> => {
	const stringifyParams = Object.entries(searchParams).map(([key, value]) => [key, String(value)]);
	const queryParams = new URLSearchParams(stringifyParams).toString();
	return guardedFetch(
		fetch(`${baseUrl}?${queryParams}`, {
			signal,
		}),
		schema
	);
};
