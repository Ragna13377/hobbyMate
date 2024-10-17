import { NewsDetailResponse, NewsFeedResponse } from '@pages/news/schema';

export type NewsFeedPageProps = {
	news: NewsFeedResponse;
};

export type NewsFeedPageUIProps = {
	news: TFormattedNews[];
};

export type NewsDetailPageProps = {
	detail: NewsDetailResponse;
};

export type NewsDetailPageUIProps = {
	detail: TFormattedNews;
};

export type TFormattedNews = Omit<NewsDetailResponse, 'image' | 'createdAt' | 'updatedAt'> & {
	blurImage: string;
	createdAt: string;
	image: string;
	updatedAt: string;
};
