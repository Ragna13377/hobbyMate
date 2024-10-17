import { z } from 'zod';
import { createFetch } from '@shared/api/requests';
import { TQueryFetch, PropsWithSignal } from '@shared/types';
import { locationByQueryServiceParams, locationByQueryServiceUrl } from '@features/auth/constants';

export const LocationByQuerySchema = z.object({
	results: z.array(
		z.object({
			city: z.union([z.string(), z.undefined()]),
			state: z.union([z.string(), z.undefined()]),
			country: z.union([z.string(), z.undefined()]),
			country_code: z.union([z.string(), z.undefined()]),
		})
	),
});

export type LocationByQueryResponse = z.infer<typeof LocationByQuerySchema>;

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
