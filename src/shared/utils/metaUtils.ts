import type { Metadata } from 'next';

export const generateMetaTitle = (title: string): Metadata => ({
	title: `HobbyMate${title ? ' | ' + title : ''}`,
});
