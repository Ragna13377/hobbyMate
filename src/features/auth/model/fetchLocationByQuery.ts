import { createFetch } from '@shared/api/requests';
import { PropsWithSignal } from '@shared/types';
import { TFetchLocation } from '@features/auth/types';
import { locationByQueryServiceParams, locationByQueryServiceUrl } from '@features/auth/constants';
import { LocationByQuerySchema } from '@features/auth/shema';

export const fetchLocationByQuery = ({ query, signal }: PropsWithSignal<TFetchLocation>) =>
	createFetch({
		baseUrl: locationByQueryServiceUrl,
		searchParams: {
			text: query,
			...locationByQueryServiceParams,
		},
		schema: LocationByQuerySchema,
		signal,
	});
