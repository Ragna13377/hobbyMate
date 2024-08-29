import { clsx } from 'clsx';
import React from 'react';
import BackgroundWrapper from '@shared/ui/BackgroundWrapper';
import Header from '@shared/ui/Header';

import earthBg from './assets/images/earth.avif';
import rockClimbingBg from './assets/images/rockclimbing.avif';
import campingBg from './assets/images/camping.avif';
import style from './style.module.scss';

export const HomePage = () => (
	<>
		<Header />
		<main className='flex flex-col justify-center items-center w-full h-full'>
			<BackgroundWrapper
				src={earthBg as string}
				priority
				backgroundPosition='bottom'
				hasFadeEffect
				isDark
			>
				<div className='flex flex-col justify-center items-center p-7 gap-5'>
					<h1
						className={clsx(
							'relative w-full text-[var(--accent-color)] text-5xl text-center select-none',
							style.titleDecoration
						)}
						data-text='Make new friends by your interests'
					>
						Make new friends by your interests
					</h1>
					<h2 className='text-[var(--text-color)] text-4xl text-center [text-shadow:_0_0_5px_black] select-none'>
						Start your search now
					</h2>
					<form className='flex flex-col gap-3.5 w-full max-w-md p-12 bg-[var(--layout-color)] rounded-lg'>
						<input
							className='h-7 py-5 px-4 text-[var(--text-color)] bg-transparent border-2 border-solid border-[var(--accent-color)] rounded caret-[var(--text-color)] placeholder:text-[var(--text-color)]'
							type='text'
							name='location'
							placeholder='Location'
						/>
						<input
							className='h-7 py-5 px-4 text-[var(--text-color)] bg-transparent border-2 border-solid border-[var(--accent-color)] rounded caret-[var(--text-color)] placeholder:text-[var(--text-color)]'
							type='text'
							name='hobby'
							placeholder='Your Hobby'
						/>
						<button
							className='h-11 text-xl font-bold uppercase bg-white rounded cursor-pointer'
							type='submit'
						>
							Find
						</button>
					</form>
				</div>
			</BackgroundWrapper>
			<BackgroundWrapper
				src={rockClimbingBg as string}
				backgroundPosition='top'
				hasFadeEffect
			/>
			<BackgroundWrapper
				src={campingBg as string}
				backgroundPosition='bottom'
				hasFadeEffect
			/>
		</main>
	</>
);
