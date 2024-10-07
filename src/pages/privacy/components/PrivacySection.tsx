import { privacyContentType } from '@pages/privacy/constants';
import InfoSection from '@shared/ui/InfoSection';
import React from 'react';
import PrivacySectionList from '@pages/privacy/components/PrivacySectionList';

type PrivacySectionProps = {
	content: privacyContentType;
	parentIndex?: number;
};

export const PrivacySection = ({ content, parentIndex = 0 }: PrivacySectionProps) => {
	const currentIndex = parentIndex + 1;
	return content.map((item, index) => {
		if (typeof item === 'string') return <p key={index}>{item}</p>;
		else if (Array.isArray(item)) return <PrivacySectionList items={item} key={index} />;
		else {
			return (
				<InfoSection
					key={item.title}
					headerLevel={currentIndex + 2}
					title={`${currentIndex}.${index + 1} ${item.title}`}
				>
					<PrivacySection content={item.content} parentIndex={currentIndex} />
				</InfoSection>
			);
		}
	});
};
