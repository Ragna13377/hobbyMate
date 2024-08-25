import React from 'react';
import Link from 'next/link';
import { svgs, svgViewBox } from './constants';
import style from './style.module.scss';

type LinkOutlinedProps = {
	href: string,
}
export const LinkOutlined = ({href}: LinkOutlinedProps) => {
	const RandomHover = svgs[Math.floor(Math.random() * svgs.length)];
	return (
    <Link className={style.link} href={`/${href.toLowerCase()}`}>
	    <RandomHover className={style.linkHoverImage} viewBox={svgViewBox} />
      {href}
    </Link>
	);
};