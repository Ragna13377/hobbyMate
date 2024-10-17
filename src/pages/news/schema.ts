import { z } from 'zod';

export const NewsDetailSchema = z.object({
	id: z.string().uuid(),
	title: z.string().min(1, { message: 'Title is required' }),
	content: z.string().min(1, { message: 'Content is required' }),
	image: z.string({ message: 'Image must be a valid URL' }),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});
export const NewsFeedSchema = z.array(NewsDetailSchema);

export type NewsDetailResponse = z.infer<typeof NewsDetailSchema>;
export type NewsFeedResponse = z.infer<typeof NewsFeedSchema>;
