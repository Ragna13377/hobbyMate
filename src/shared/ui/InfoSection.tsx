import React from 'react';

export type InfoSectionProps = {
	title: string;
	content: string;
};
const InfoSection = ({ title, content }: InfoSectionProps) => (
	<section>
		<h2>{title}</h2>
		<p>{content}</p>
	</section>
);

export default InfoSection;
