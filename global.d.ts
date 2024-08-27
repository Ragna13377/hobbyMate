import en from '@/config/messages/en.json';

type Messages = typeof en;
declare global {
	interface IntlMessages extends Messages {}
}

declare module "*.avif" {
	const content: any;
	export default content;
}