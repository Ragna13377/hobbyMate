import { locationByQueryServiceParams, locationByQueryServiceUrl } from '@features/auth/constants';
import { fetchLocationByQuerySchema } from '@features/auth/shema';
import { createFetch } from '@shared/api/requests';
import { TFetchLocation } from '@features/auth/types';
import { PropsWithSignal } from '@shared/types';

export const fetchLocationByQuery = ({ query, signal }: PropsWithSignal<TFetchLocation>) =>
	createFetch({
		baseUrl: locationByQueryServiceUrl,
		searchParams: {
			...locationByQueryServiceParams,
			text: query,
		},
		schema: fetchLocationByQuerySchema,
		signal,
	});
