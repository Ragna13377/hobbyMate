import { locationServiceParams, locationServiceUrl } from '@features/auth/constants';
import { fetchLocationSchema } from '@features/auth/shema';
import { createFetch } from '@shared/api/requests';
import { TFetchLocation } from '@features/auth/types';
import { PropsWithSignal } from '@shared/types';

export const fetchLocation = ({ query, signal }: PropsWithSignal<TFetchLocation>) =>
	createFetch({
		baseUrl: locationServiceUrl,
		searchParams: {
			...locationServiceParams,
			text: query,
		},
		schema: fetchLocationSchema,
		signal,
	});
