import { NewsDetailResponse } from '@pages/news/schema';
import { TFormattedNews } from '@pages/news/types';
import { blurImages } from '@/public/news/blurImages';

export const formatNews = ({
	image,
	createdAt,
	updatedAt,
	...rest
}: NewsDetailResponse): TFormattedNews => ({
	image: `/news/${image}.avif`,
	blurImage: blurImages[image as keyof typeof blurImages],
	createdAt: new Date(createdAt!).toLocaleDateString(),
	updatedAt: new Date(updatedAt!).toLocaleDateString(),
	...rest,
});
