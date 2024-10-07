import { Dispatch, SetStateAction } from 'react';

export type BadgeProviderProps = {
	defaultValues?: string[];
};
export type TBadgeContext = {
	badges: string[];
	addBadge: (badge: string, setState: Dispatch<SetStateAction<string>>) => void;
	deleteBadge: (badge?: string) => void;
};
