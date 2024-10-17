import React, { PropsWithChildren } from 'react';
import { ClassValue } from 'clsx';
import { cn } from '@shared/lib/tailwind';
import Image from 'next/image';
import style from './style.module.scss';

export type BackgroundWrapperProps = PropsWithChildren & {
	src: string;
	blurImage?: string;
	priority?: boolean;
	isDark?: boolean;
	hasFadeEffect?: boolean;
	backgroundPosition?: 'bottom' | 'top';
	externalStyle?: ClassValue;
};
const BackgroundWrapper = ({
	src,
	blurImage,
	priority,
	backgroundPosition,
	hasFadeEffect,
	isDark,
	externalStyle,
	children,
}: BackgroundWrapperProps) => (
	<section
		className={cn(
			'relative flex flex-col justify-center items-center w-full h-[100dvh]',
			hasFadeEffect && style.section,
			externalStyle
		)}
	>
		<Image
			src={src}
			alt=''
			fill
			blurDataURL={blurImage}
			placeholder='blur'
			priority={priority}
			className={cn('-z-10 object-cover', {
				'object-center': !backgroundPosition,
				'object-bottom': backgroundPosition === 'bottom',
				'object-top': backgroundPosition === 'top',
				['brightness-70 grayscale-40']: isDark,
			})}
		/>
		{children}
	</section>
);

export default BackgroundWrapper;
