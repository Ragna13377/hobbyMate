'use server';

import prisma from '@shared/lib/prisma';
import { TQueryFetch } from '@shared/types';

export const fetchCountryByQuery = async ({ query }: TQueryFetch) => {
	const countries = await prisma.country.findMany({
		where: { name: { startsWith: query } },
	});
	return countries.map(({ name }) => name);
};

export const fetchCountryByName = async (query: string) =>
	await prisma.country.findFirst({
		where: { name: { equals: query } },
	});
