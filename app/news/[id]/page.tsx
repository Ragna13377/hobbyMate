import React from 'react';
import { notFound } from 'next/navigation';
import { fetchNewsDetail } from '@pages/news/actions';
import { NewsDetailPage } from '@pages/news/components/detail';
import { generateMetaTitle } from '@shared/utils/metaUtils';

type NewsDetailProps = {
	params: {
		id: string;
	};
};

export const metadata = generateMetaTitle('News');

const NewsDetail = async ({ params: { id } }: NewsDetailProps) => {
	const detail = await fetchNewsDetail(id);
	if (!detail) notFound();
	return <NewsDetailPage detail={detail} />;
};

export default NewsDetail;
