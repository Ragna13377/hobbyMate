import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@shared/ui/Card';
import { NewsFeedPageUIProps } from '../../../types';

export const NewsFeedPageUI = ({ news }: NewsFeedPageUIProps) => (
	<main className='w-dvw h-dvh'>
		<div className='max-w-screen-desktop h-full flex flex-wrap gap-5 justify-center mx-auto mb-14 pt-[var(--header-offset)]'>
			{news.length > 0 ? (
				news.map(({ id, title, createdAt, image, blurImage }) => (
					<Link href={`/news/${id}`} key={id} className='h-max rounded-xl'>
						<Card
							key={id}
							className='relative flex flex-col justify-between w-[425px] h-96  bg-transparent text-foreground border-0 text-end'
						>
							<Image
								className='object-center object-cover rounded-xl blur-1 -z-10'
								src={image}
								alt='preview image'
								fill
								placeholder='blur'
								blurDataURL={blurImage}
							/>
							<CardHeader className='backdrop-brightness-50'>
								<CardTitle className='text-accent max-h-12 text-xl '>{title}</CardTitle>
								<CardDescription className='font-light text-foreground'>
									{createdAt}
								</CardDescription>
							</CardHeader>
							<CardFooter className='text-xl text-accent justify-end mix-blend-difference'>
								<p className='p-2 border-2 transition-color duration-200 ease-in-out hover:bg-foreground hover:text-primary'>
									Read more ▶
								</p>
							</CardFooter>
						</Card>
					</Link>
				))
			) : (
				<p className='text-2xl'>News is over :)</p>
			)}
		</div>
	</main>
);
