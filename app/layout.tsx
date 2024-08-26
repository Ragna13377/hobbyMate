import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { PageProps } from '@shared/types';
import { capitalize } from '@shared/utils';
import '@app/styles/global.scss';

export function generateMetadata({ params: { slug } }: PageProps): Metadata {
	return {
		title: `HobbyMate${slug ? ' | ' + capitalize(slug) : ''}`,
		description: 'App for meeting new friends',
	};
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	const messages = await getMessages();
	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
