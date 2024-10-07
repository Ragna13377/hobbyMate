import React from 'react';
import { cn } from '@shared/lib/tailwind';
import BackgroundWrapper from '@shared/ui/BackgroundWrapper';

import { blurCamping, blurEarth, blurRockClimbing } from '@pages/home/constants';
import earthBg from './assets/images/earth.avif';
import rockClimbingBg from './assets/images/rockclimbing.avif';
import campingBg from './assets/images/camping.avif';
import style from './style.module.scss';

export const HomePage = () => (
	<main className='flex flex-col justify-center items-center w-full h-full'>
		<BackgroundWrapper
			src={earthBg as string}
			priority
			backgroundPosition='bottom'
			hasFadeEffect
			isDark
			blurImage={blurEarth}
		>
			<div className='flex flex-col justify-center items-center p-7 gap-5'>
				<h1
					className={cn(
						style.titleDecoration,
						'relative w-full text-accent text-5xl text-center select-none'
					)}
					data-text='Make new friends by your interests'
				>
					Make new friends by your interests
				</h1>
				<h2 className='text-4xl text-center [text-shadow:_0_0_5px_black] select-none'>
					Start your search now
				</h2>
			</div>
		</BackgroundWrapper>
		<BackgroundWrapper src={rockClimbingBg as string} blurImage={blurRockClimbing} backgroundPosition='top' hasFadeEffect />
		<BackgroundWrapper src={campingBg as string} blurImage={blurCamping} backgroundPosition='bottom' hasFadeEffect />
	</main>
);
