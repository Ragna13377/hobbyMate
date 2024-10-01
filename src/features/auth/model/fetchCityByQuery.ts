'use server';

import prisma from '@shared/lib/prisma';
import { guardedFetch } from '@shared/api/helpers';
import { TFetchLocation } from '@features/auth/types';
import {
	CountryByQueryResponse,
	CountryByQuerySchema,
	CountryByNameResponse,
	CountryByNameSchema,
} from '@features/auth/shema';

export const fetchCountryByQuery = async ({
	query,
}: TFetchLocation): Promise<CountryByQueryResponse | undefined> =>
	guardedFetch({
		requestFn: async () =>
			prisma.country.findMany({
				where: { name: { startsWith: query } },
			}),
		schema: CountryByQuerySchema,
		fromPrisma: true,
	});

export const fetchCountryByName = async (
	query: string
): Promise<CountryByNameResponse | undefined> =>
	guardedFetch({
		requestFn: async () =>
			prisma.country.findFirst({
				where: { name: { equals: query } },
			}),
		schema: CountryByNameSchema,
		fromPrisma: true,
	});
