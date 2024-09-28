import React from 'react';
import { ServiceTerms } from '@features/rules/constants';
import InfoSection from '@shared/ui/InfoSection';

const Terms = () => (
	<>
		{ServiceTerms.map(({ title, content }, index) => (
			<InfoSection key={index} title={`${index + 1}. ${title}`} content={content} />
		))}
	</>
);

export default Terms;
