import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
	const locale = 'en';
	const messagePath = `./messages/${locale}.json`;
	return {
		locale,
		messages: (await import(messagePath)).default,
	};
});
