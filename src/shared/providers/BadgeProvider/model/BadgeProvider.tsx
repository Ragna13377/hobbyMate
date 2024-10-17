'use client';
import React, { PropsWithChildren } from 'react';
import { BadgeProviderProps } from '../types';
import { BadgeContext } from '../hooks/useBadgeContext';
import { useBadges } from '../hooks/useBadges';
import BadgeProviderUi from '../ui/BadgeProviderUI';

export const BadgeProvider = ({
	defaultValues,
	children,
}: PropsWithChildren<BadgeProviderProps>) => {
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
