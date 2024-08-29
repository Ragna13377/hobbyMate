import React from 'react';
import Link from 'next/link';
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from '@shared/ui/Navigation';
import { Button } from '@shared/ui/Button';
import { capitalize } from '@shared/lib/textUtils';
import { NavBarProps } from '@entities/NavBar/types';
import { svgs, svgViewBox } from '@entities/NavBar/constants';
import style from './style.module.scss'

export const NavBar = ({ navElements }: NavBarProps) => {
	const RandomSvg = svgs[Math.floor(Math.random() * svgs.length)];
	return (
		<NavigationMenu>
			<NavigationMenuList className='flex gap-5'>
				{navElements.map(({ href, type, text }) => (
					<NavigationMenuItem key={href} className='relative'>
						{type === 'button' ? (
							<Button variant='link' size='default' className={style.container}>
								<p>{capitalize(text ?? href)}</p>
								<RandomSvg viewBox={svgViewBox} className={style.linkHoverImage}/>
							</Button>
						) : (
							<Link href={`/${href}`} legacyBehavior passHref>
								<NavigationMenuLink className={style.container}>
									<p>{capitalize(text ?? href)}</p>
									<RandomSvg viewBox={svgViewBox} className={style.linkHoverImage}/>
								</NavigationMenuLink>
							</Link>
						)}
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
