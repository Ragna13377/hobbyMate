import { createFetch } from '@shared/api/requests';
import { TQueryFetch, PropsWithSignal } from '@shared/types';
import { locationByQueryServiceParams, locationByQueryServiceUrl } from '@features/auth/constants';
import { LocationByQuerySchema } from '@features/auth/schema';

export const fetchLocationByQuery = ({ query, signal }: PropsWithSignal<TQueryFetch>) =>
	createFetch({
		baseUrl: locationByQueryServiceUrl,
		searchParams: {
			text: query,
			...locationByQueryServiceParams,
		},
		schema: LocationByQuerySchema,
		signal,
	});
