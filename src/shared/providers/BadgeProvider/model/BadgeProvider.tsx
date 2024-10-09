'use client';
import React, { createContext, PropsWithChildren } from 'react';
import { BadgeProviderProps, TBadgeContext } from '../types';
import { useBadges } from '../hooks/useBadges';
import BadgeProviderUi from '@shared/providers/BadgeProvider/ui/BadgeProviderUI';

export const BadgeContext = createContext<Omit<TBadgeContext, 'badges'> | undefined>(undefined);
export const BadgeProvider = ({
	defaultValues,
	children,
}: BadgeProviderProps & PropsWithChildren) => {

	const { badges, addBadge, deleteBadge } = useBadges({ defaultValues });
	return (
		<BadgeContext.Provider
			value={{
				addBadge,
				deleteBadge,
			}}
		>
			{children}
			<BadgeProviderUi badges={badges} deleteBadge={deleteBadge} />
		</BadgeContext.Provider>
	);
};
