import React from 'react';
import Image from 'next/image';
import { NewsDetailPageUIProps } from '@pages/news/types';

const NewsDetailPageUI = ({
	detail: { title, content, image, blurImage },
}: NewsDetailPageUIProps) => (
	<main className='relative w-dvw h-dvh'>
		<div className='max-w-screen-desktop h-full flex items-center mx-auto mb-14 pt-[var(--header-offset)]'>
			<Image
				className='object-center object-cover blur-sm -z-10'
				src={image}
				alt='preview image'
				fill
				placeholder='blur'
				blurDataURL={blurImage}
			/>
			<section className='p-10 rounded-lg bg-[#2d3849ad] flex flex-col items-center mx-auto max-w-2xl'>
				<h2 className='text-4xl mb-14'>{title}</h2>
				<p className='text-center text-xl'>{content}</p>
			</section>
		</div>
	</main>
);

export default NewsDetailPageUI;
