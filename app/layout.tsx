import type { Metadata } from 'next';
import { openGraphMetadata, twitterMetadata } from '@shared/constants';
import '@app/styles/globals.scss';

export const metadata: Metadata = {
	title: 'HobbyMate',
	description: 'App for meeting new friends',
	openGraph: openGraphMetadata,
	twitter: twitterMetadata,
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
