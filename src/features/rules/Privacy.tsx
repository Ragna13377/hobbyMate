import React from 'react';
import { PrivacyAndPolicy } from '@features/rules/constants';
import InfoSection from '@shared/ui/InfoSection';

const Privacy = () => (
	<>
		{PrivacyAndPolicy.map(({ title, content }, index) => (
			<InfoSection key={index} title={`${index + 1}. ${title}`} content={content} />
		))}
	</>
);

export default Privacy;
