import { createContext, useContext } from 'react';
import { TBadgeContext } from '@shared/providers/BadgeProvider/types';

export const BadgeContext = createContext<Omit<TBadgeContext, 'badges'> | undefined>(undefined);
export const useBadgeContext = () => {
	const badgeContext = useContext(BadgeContext);
	if (badgeContext === undefined) throw new Error('Badge context is undefined');
	return badgeContext;
};
