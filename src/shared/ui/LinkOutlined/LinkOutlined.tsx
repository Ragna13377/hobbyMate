import React from 'react';
import Link from 'next/link';
import { svgs, svgViewBox } from '@shared/ui/LinkOutlined/constants';
import style from './style.module.scss';

type LinkOutlinedProps = {
	href: string;
};
const LinkOutlined = ({ href }: LinkOutlinedProps) => {
	const RandomHover = svgs[Math.floor(Math.random() * svgs.length)];
	return (
		<Link className='relative text-lg' href={`/${href.toLowerCase()}`}>
			<RandomHover className={style.linkHoverImage} viewBox={svgViewBox} />
			{href}
		</Link>
	);
};

export default LinkOutlined;
