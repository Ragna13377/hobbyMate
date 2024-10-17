import React, { PropsWithChildren } from 'react';
import HeadingTag from '@shared/ui/HeadingTag';
import { cn } from '@shared/lib/tailwind';

type InfoSectionBaseProps = {
	title: string;
	headerLevel?: number;
	className?: string;
};
type InfoSectionWithChildrenProps = PropsWithChildren<InfoSectionBaseProps>;
type InfoSectionWithContentProps = InfoSectionBaseProps & {
	content?: string;
};
type InfoSectionProps = InfoSectionWithChildrenProps | InfoSectionWithContentProps;

const isInfoSectionWithContent = (
	infoSection: InfoSectionProps
): infoSection is InfoSectionWithContentProps => 'content' in infoSection;

const InfoSection = (props: InfoSectionProps) => {
	const { title, headerLevel = 2, className } = props;
	const sectionContent = (
		<>
			<HeadingTag
				id={title}
				level={headerLevel}
				className={cn('font-bold', headerLevel > 2 ? 'my-2 text-lg' : 'mb-3 text-xl')}
			>
				{title}
			</HeadingTag>
			{isInfoSectionWithContent(props) ? <p>{props.content}</p> : props.children}
		</>
	);
	return headerLevel > 2 ? (
		sectionContent
	) : (
		<section className={className}>{sectionContent}</section>
	);
};

export default InfoSection;
