import React, { PropsWithChildren } from 'react';
import { BadgeProviderProps } from '../types';
import { useBadges } from '../hooks/useBadges';
import { BadgeContext } from '../hooks/useBadgeContext';
import BadgeProviderUi from '@shared/providers/ui/BadgeProviderUI';

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
