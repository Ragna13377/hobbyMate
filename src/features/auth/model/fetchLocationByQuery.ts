import { locationByQueryServiceParams, locationByQueryServiceUrl } from '@features/auth/constants';
import { CountryByQueryResponse, CountryByQuerySchema } from '@features/auth/shema';
import { createFetch } from '@shared/api/requests';
import { TFetchLocation } from '@features/auth/types';
import { PropsWithSignal } from '@shared/types';
import prisma from '@shared/lib/prisma';
import { guardedFetch } from '@shared/api/helpers';

export const fetchLocationByQuery = ({ query, params, signal }: PropsWithSignal<TFetchLocation>) =>
	createFetch({
		baseUrl: locationByQueryServiceUrl,
		searchParams: {
			text: query,
			...params,
			...locationByQueryServiceParams,
		},
		schema: CountryByQuerySchema,
		signal,
	});

export const fetchCityByQuery = async (
	query: string
): Promise<CountryByQueryResponse | undefined> =>
	guardedFetch({
		requestFn: async () =>
			prisma.country.findMany({
				where: { name: { startsWith: query } },
			}),
		schema: CountryByQuerySchema,
		fromPrisma: true,
	});
