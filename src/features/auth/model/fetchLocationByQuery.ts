import { createFetch } from '@shared/api/requests';
import { PropsWithSignal } from '@shared/types';
import { TQueryFetch } from '@features/auth/types';
import { locationByQueryServiceParams, locationByQueryServiceUrl } from '@features/auth/constants';
import { LocationByQuerySchema } from '@features/auth/shema';

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
