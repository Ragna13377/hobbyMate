import React, { PropsWithChildren } from 'react';
import { ClassValue, clsx } from 'clsx';
import Image from 'next/image';
import style from './style.module.scss';

export type BackgroundWrapperProps = PropsWithChildren & {
	src: string;
	priority?: boolean;
	isDark?: boolean;
	hasFadeEffect?: boolean;
	backgroundPosition?: 'bottom' | 'top';
	externalStyle: ClassValue;
};
const BackgroundWrapper = ({
	src,
	priority,
	backgroundPosition,
	hasFadeEffect,
	isDark,
	externalStyle,
	children,
}: BackgroundWrapperProps) => (
	<section
		className={clsx(
			'relative flex flex-col justify-center items-center w-full h-[100dvh]',
			externalStyle || '',
			{
				[style.section]: hasFadeEffect,
			}
		)}
	>
		<Image
			src={src}
			alt=''
			fill
			priority={priority}
			className={clsx('-z-10 object-cover', {
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
