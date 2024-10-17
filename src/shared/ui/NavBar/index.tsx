import { v4 as uuidv4 } from 'uuid';
import { cn } from '@shared/lib/tailwind';
import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { capitalize } from '@shared/utils/stringUtils';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@shared/ui/Navigation';
import { svgArray, svgViewBox } from './constants';
import style from './style.module.scss';

const NavBar = ({ children }: PropsWithChildren) => (
	<NavigationMenu>
		<NavigationMenuList className='flex gap-5'>{children}</NavigationMenuList>
	</NavigationMenu>
);

NavBar.Item = function NavbarItem({ children }: PropsWithChildren) {
	const RandomSvg = svgArray[Math.floor(Math.random() * svgArray.length)];
	return (
		<div
			key={uuidv4()}
			suppressHydrationWarning
			className={cn('relative min-w-14 flex items-center justify-center', style.container)}
		>
			{children}
			<RandomSvg viewBox={svgViewBox} className={style.linkHoverImage} />
		</div>
	);
};

NavBar.Link = function NavbarLink({ href, children }: PropsWithChildren<{ href: string }>) {
	return (
		<NavigationMenuItem className='relative'>
			<Link href={href} legacyBehavior passHref>
				<NavigationMenuLink>{children ? children : capitalize(href.slice(1))}</NavigationMenuLink>
			</Link>
		</NavigationMenuItem>
	);
};

export default NavBar;
