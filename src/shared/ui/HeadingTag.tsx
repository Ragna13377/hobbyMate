import React, { HTMLProps, PropsWithChildren } from 'react';

type HeadingTagProps = PropsWithChildren &
	HTMLProps<HTMLHeadingElement> & {
		level: number;
	};
const HeadingTag = ({ level, children, ...props }: HeadingTagProps) => {
	const Tag = `h${level}`;
	return <Tag {...props}>{children}</Tag>;
};

export default HeadingTag;
