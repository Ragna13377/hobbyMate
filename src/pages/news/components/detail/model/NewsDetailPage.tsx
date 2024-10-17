import React from 'react';
import { NewsDetailPageProps } from '@pages/news/types';
import NewsDetailPageUI from '../ui/NewsDetailPageUI';
import { formatNews } from '@pages/news/utils';

export const NewsDetailPage = ({ detail }: NewsDetailPageProps) => {
	const formattedNews = formatNews(detail);
	return <NewsDetailPageUI detail={formattedNews} />;
};
