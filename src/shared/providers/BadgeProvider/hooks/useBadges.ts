import { useState } from 'react';
import { BadgeProviderProps } from '@shared/providers/BadgeProvider/types';

export const useBadges = ({ defaultValues }: BadgeProviderProps) => {
	const [badges, setBadges] = useState<string[]>(defaultValues || []);
	const addBadge = (badge: string): string[] => {
		const trimmedBadge = badge.trim();
		if (!badges.includes(trimmedBadge)) {
			setBadges((prev) => [...prev, trimmedBadge]);
			return [...badges, trimmedBadge];
		}
		return badges;
	};
	const deleteBadge = (badge?: string): string[] => {
		const updatedBadges = badge ? badges.filter((b) => b !== badge) : badges.slice(0, -1);
		setBadges(updatedBadges);
		return updatedBadges
	};
	return {
		badges,
		addBadge,
		deleteBadge,
	};
};
