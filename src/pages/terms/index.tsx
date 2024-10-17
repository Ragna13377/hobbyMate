import React from 'react';
import Image from 'next/image';
import { supportEmail } from '@shared/constants';
import InfoSection from '@shared/ui/InfoSection';
import { blurTerms, termsData } from './constants';
import bg from './assets/images/terms.avif';

export const TermsPage = () => (
	<main className='max-w-screen-desktop flex flex-col items-center gap-8 pt-[var(--header-offset)] mx-auto mb-14 text-center font-light'>
		<Image
			src={bg}
			alt=''
			priority
			blurDataURL={blurTerms}
			placeholder='blur'
			className='-z-10 fixed inset-0 object-cover object-center'
		/>
		<h1 className='text-3xl font-bold'>Terms of Service</h1>
		<p>
			These Terms of Service govern your access to and use of our website, services, and any related
			content provided by us. By using our site, you agree to abide by these terms in full. If you
			do not agree with any part of these terms, please refrain from using our services.
		</p>
		{termsData.map((item, index) => (
			<InfoSection key={index} className='max-w-3xl' {...item} />
		))}
		<InfoSection title='Contact Information'>
			<p>
				If you have any questions or concerns about these Terms of Service, please contact us at{' '}
				<a className='underline-default' href={`mailto:${supportEmail}`}>
					{supportEmail}
				</a>
			</p>
		</InfoSection>
	</main>
);
