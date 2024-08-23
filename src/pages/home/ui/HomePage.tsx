import React from 'react';
import Image from 'next/image';
import earthBg from './assets/images/earth.avif'
import rockClimbingBg from './assets/images/rockclimbing.avif'
import camping from './assets/images/camping.avif'
import style from './style.module.scss';
import Header from '@shared/ui/Header';
import clsx from 'clsx';

export const HomePage = () => {
	return (
		<>
			<main className={style.container}>
				<section className={style.pageScreen}>
					<Image className={clsx(style.layout, style.layoutBottom)}
					       src={earthBg as string} alt=''
					       fill
					/>
					<p>Текст</p>
				</section>
				<section className={clsx(style.pageScreen, style.withoutBg)}>1</section>
				<section className={style.pageScreen}>
					<Image className={clsx(style.layout, style.layoutTop)}
					       src={rockClimbingBg as string} alt=''
					       fill
					/>
					<p>Текст</p>
				</section>
				<section className={clsx(style.pageScreen, style.withoutBg)}>1</section>
				<section className={style.pageScreen}>
					<Image className={clsx(style.layout, style.layoutBottom)}
					       src={camping as string} alt=''
					       fill
					/>
					<p>Текст</p>
				</section>
			</main>
		</>
	);
};