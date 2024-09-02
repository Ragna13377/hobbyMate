import React from 'react';
import Link from 'next/link';
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from '@shared/ui/Navigation';
import { capitalize } from '@shared/lib/textUtils';
import { NavBarProps } from '@entities/NavBar/types';
import { svgs, svgViewBox } from '@entities/NavBar/constants';
import style from './style.module.scss';

export const NavBar = ({ navElements }: NavBarProps) => (
	<NavigationMenu>
		<NavigationMenuList className='flex gap-5'>
			{navElements.map((element, index) => {
				const RandomSvg = svgs[Math.floor(Math.random() * svgs.length)];
				return (
					<NavigationMenuItem key={index} className='relative'>
						{'href' in element ? (
							<Link href={`/${element.href}`} legacyBehavior passHref>
								<NavigationMenuLink className={style.container}>
									{capitalize(element.href)}
									<RandomSvg viewBox={svgViewBox} className={style.linkHoverImage} />
								</NavigationMenuLink>
							</Link>
						) : (
							<div className={style.container}>
								{element.children}
								<RandomSvg viewBox={svgViewBox} className={style.linkHoverImage} />
							</div>
						)}
					</NavigationMenuItem>
				);
			})}
		</NavigationMenuList>
	</NavigationMenu>
);
