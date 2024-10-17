'use client';
import React, { useState } from 'react';
import { NewsFeedPageProps, TFormattedNews } from '@pages/news/types';
import { formatNews } from '@pages/news/utils';
import { NewsFeedPageUI } from '../ui/NewsFeedPageUI';

// TODO: сделать первую новость большой, остальные flex
// TODO следать инфинити скролл

export const NewsFeedPage = ({ news }: NewsFeedPageProps) => {
	const [cursor, setCursor] = useState<string | null>(news.at(-1)?.id ?? null);
	const [newsList, setNewsList] = useState<TFormattedNews[]>(() =>
		news.length > 0 ? news.map((n) => formatNews(n)) : []
	);
	return <NewsFeedPageUI news={newsList} />;
};
