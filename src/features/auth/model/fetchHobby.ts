'use server';
import { TQueryFetch } from '@shared/types';
import prisma from '@shared/lib/prisma';
import { guardedFetch } from '@shared/api/helpers';
import { HobbyResponse, HobbySchema } from '@features/auth/schema';

export const fetchHobby = async ({ query }: TQueryFetch): Promise<HobbyResponse | undefined> =>
	guardedFetch({
		requestFn: async () =>
			prisma.hobby.findMany({
				where: { name: { startsWith: query } },
			}),
		schema: HobbySchema,
		fromPrisma: true,
	});
