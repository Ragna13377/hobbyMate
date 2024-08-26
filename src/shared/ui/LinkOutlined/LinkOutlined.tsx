import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { svgs, svgViewBox } from './constants';
import style from './style.module.scss';

type LinkOutlinedProps = {
	href: string;
};
export const LinkOutlined = ({ href }: LinkOutlinedProps) => {
	const RandomHover = svgs[Math.floor(Math.random() * svgs.length)];
	const t = useTranslations('navigation');
	return (
		<Link className={style.link} href={`/${href.toLowerCase()}`}>
			<RandomHover className={style.linkHoverImage} viewBox={svgViewBox} />
			{t(href)}
		</Link>
	);
};
