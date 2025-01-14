import React from 'react';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { openGraphMetadata, twitterMetadata } from '@shared/constants';
import Header from '@widgets/Header';
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
			<SessionProvider>
				<body>
					<Header />
					{children}
				</body>
			</SessionProvider>
		</html>
	);
}
