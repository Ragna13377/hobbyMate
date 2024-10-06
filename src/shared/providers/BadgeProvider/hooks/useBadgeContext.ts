import { createContext, useContext } from 'react';
import { TBadgeContext } from '@shared/providers/BadgeProvider/types';

export const BadgeContext = createContext<Omit<TBadgeContext, 'badges'> | undefined>(undefined);
export const useBadgesContext = () => {
	const context = useContext(BadgeContext);
	if (context === undefined) {
		return null;
	}
	return context;
};
