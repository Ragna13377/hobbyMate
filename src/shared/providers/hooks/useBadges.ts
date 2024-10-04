import { Dispatch, SetStateAction, useState } from 'react';
import { BadgeProviderProps } from '@shared/providers/types';

export const useBadges = ({ defaultValues }: BadgeProviderProps) => {
	const [badges, setBadges] = useState<string[]>(defaultValues || []);
	const addBadge = (badge: string, setState: Dispatch<SetStateAction<string>>) => {
		const trimmedBadge = badge.trim();
		if (!badges.includes(trimmedBadge)) {
			setBadges((prev) => [...prev, trimmedBadge]);
			setState('');
		}
	};
	const deleteBadge = (badge?: string) => {
		if (badge) setBadges(badges.filter((b) => b !== badge));
		else setBadges((prev) => prev.slice(0, -1));
	};
	return {
		badges,
		addBadge,
		deleteBadge,
	};
};
