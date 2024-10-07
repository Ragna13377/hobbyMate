import React from 'react';
import { Badge } from '@shared/ui/Badge';
import { TBadgeContext } from '@shared/providers/BadgeProvider/types';

const BadgeProviderUi = ({ badges, deleteBadge }: Omit<TBadgeContext, 'addBadge'>) => (
	<ul className='flex gap-2'>
		{badges.map((b) => (
			<li key={b}>
				<Badge variant='interactive' onClick={() => deleteBadge(b)}>
					{b}
				</Badge>
			</li>
		))}
	</ul>
);

export default BadgeProviderUi;
