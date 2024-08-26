import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import Header from '@shared/ui/Header/ui';
import earthBg from './assets/images/earth.avif';
import rockClimbingBg from './assets/images/rockclimbing.avif';
import camping from './assets/images/camping.avif';
import style from './style.module.scss';

export const HomePage = async () => {
	return (
		<>
			<Header />
			<main className={style.main}>
				<section className={style.section}>
					<Image
						className={clsx(
							style.layout,
							style.layoutBottom,
							style.layoutDarken
						)}
						src={earthBg}
						alt=''
						fill
					/>
					<div className={style.container}>
						<h1
							className={style.title}
							data-text='Make new friends by your interests'
						>
							Make new friends by your interests
						</h1>
						<h2 className={style.subtitle}>Start your search now</h2>
						<form className={style.form}>
							<input
								className={style.input}
								type='text'
								name='location'
								placeholder='Location'
							/>
							<input
								className={style.input}
								type='text'
								name='hobby'
								placeholder='Your Hobby'
							/>
							<button className={style.button} type='submit'>
								Find
							</button>
						</form>
					</div>
				</section>
				<section className={style.section}>
					<Image
						className={clsx(style.layout, style.layoutTop)}
						src={rockClimbingBg}
						alt=''
						fill
					/>
				</section>
				<section className={style.section}>
					<Image
						className={clsx(style.layout, style.layoutBottom)}
						src={camping}
						alt=''
						fill
					/>
				</section>
			</main>
		</>
	);
};
