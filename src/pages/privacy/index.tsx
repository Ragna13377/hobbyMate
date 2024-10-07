import React, { Fragment } from 'react';
import Link from 'next/link';
import { supportEmail } from '@shared/constants';
import InfoSection from '@shared/ui/InfoSection';
import { Separator } from '@shared/ui/Separator';
import { privacyPolicyData } from './constants';
import { PrivacySection } from './components/PrivacySection';

export const PrivacyPage = () => (
	<div className='max-w-screen-desktop flex mx-auto mb-14 pt-[var(--header-height)]'>
		<aside className='fixed top-1/2 -translate-y-1/2 flex items-center justify-center'>
			<ul className='flex flex-col gap-3 text-xl'>
				<li>
					<Link href={'#User Privacy Notice'}>User Privacy Notice</Link>
				</li>
				{privacyPolicyData.map(({ title }, index) => (
					<li
						key={title}
						className='hover:text-accent transition-colors transition-duration-200 transition-ease'
					>
						<Link href={`#${index + 1}. ${title}`}>{`${index + 1}. ${title}`}</Link>
					</li>
				))}
				<li>
					<Link href={'#Contact Us'}>Contact Us</Link>
				</li>
			</ul>
		</aside>
		<main className='w-2/3 ml-1/3'>
			<h1 id='User Privacy Notice' className='text-3xl'>
				User Privacy Notice
			</h1>
			<p className='my-7'>
				At HobbyMate, we are dedicated to safeguarding your privacy and ensuring the security of
				your personal information. This Privacy Policy outlines our practices regarding the
				collection, use, and disclosure of your information when you use our website, and any
				related services (collectively, the &#34;Services&#34;). By accessing or using our Services,
				you agree to the collection and use of information in accordance with this policy.
			</p>
			{privacyPolicyData.map(({ title, content }, index) => (
				<Fragment key={title}>
					<InfoSection title={`${index + 1}. ${title}`}>
						<PrivacySection content={content} />
					</InfoSection>
					<Separator variant='primary' size='small' />
				</Fragment>
			))}
			<InfoSection title='Contact Us'>
				<p>
					If you have any questions about this Privacy Policy, please contact us:{' '}
					<a className='underline-default' href={`mailto:${supportEmail}`}>
						{supportEmail}
					</a>
				</p>
			</InfoSection>
		</main>
	</div>
);
