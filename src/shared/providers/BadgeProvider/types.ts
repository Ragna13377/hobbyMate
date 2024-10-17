export type BadgeProviderProps = {
	defaultValues?: string[];
};

export type TBadgeContext = {
	badges: string[];
	addBadge: (badge: string) => string[];
	deleteBadge: (badge?: string) => string[];
};
