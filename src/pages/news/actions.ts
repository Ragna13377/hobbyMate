'use server';
import prisma from '@shared/lib/prisma';
import { guardedFetch } from '@shared/api/helpers';
import { NewsDetailResponse, NewsDetailSchema, NewsFeedResponse, NewsFeedSchema } from './schema';
import { newsFeedLimit } from './constants';

export const fetchNewsFeed = async (
	id?: string,
	limit: number = newsFeedLimit
): Promise<NewsFeedResponse | undefined> => {
	const cursorObj = id ? { id: id } : undefined;
	return guardedFetch({
		requestFn: async () =>
			prisma.news.findMany({
				skip: cursorObj ? 1 : 0,
				cursor: cursorObj,
				take: limit,
				orderBy: {
					createdAt: 'desc',
				},
			}),
		schema: NewsFeedSchema,
		fromPrisma: true,
	});
};

export const fetchNewsDetail = async (id: string): Promise<NewsDetailResponse | undefined> =>
	guardedFetch({
		requestFn: async () =>
			prisma.news.findUnique({
				where: {
					id,
				},
			}),
		schema: NewsDetailSchema,
		fromPrisma: true,
	});
