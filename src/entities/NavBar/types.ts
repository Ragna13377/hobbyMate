type NavElement = {
	href: string;
	type: 'button' | 'link';
	text?: string;
};
export type NavBarProps = {
	navElements: NavElement[];
};
