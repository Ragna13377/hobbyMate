'use server';
import prisma from '@shared/lib/prisma';
import { TQueryFetch } from '@shared/types';

export const fetchHobby = async ({ query }: TQueryFetch) => {
	const hobby = await prisma.hobby.findMany({
		where: { name: { startsWith: query } },
	});
	return hobby.map(({ name }) => name);
};
