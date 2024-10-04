'use server';
import { TQueryFetch } from '@features/auth/types';
import { HobbyResponse, HobbySchema } from '@features/auth/shema';
import { guardedFetch } from '@shared/api/helpers';
import prisma from '@shared/lib/prisma';

export const fetchHobby = async ({ query }: TQueryFetch): Promise<HobbyResponse | undefined> =>
	guardedFetch({
		requestFn: async () =>
			prisma.hobby.findMany({
				where: { name: { startsWith: query } },
			}),
		schema: HobbySchema,
		fromPrisma: true,
	});
