import { createContext, useContext } from 'react';
import { TBadgeContext } from '@shared/providers/types';

export const BadgeContext = createContext<Omit<TBadgeContext, 'badges'> | undefined>(undefined);
export const useBadgesContext = () => {
	const context = useContext(BadgeContext);
	if (context === undefined) {
		throw new Error('BadgeProvider context undefined');
	}
	return context;
};
