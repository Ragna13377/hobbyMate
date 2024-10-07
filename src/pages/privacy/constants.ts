export type privacyContentType = (string | string[] | privacyData)[];
type privacyData = {
	title: string;
	content: privacyContentType;
};
export const privacyPolicyData: privacyData[] = [
	{
		title: 'Information We Collect',
		content: [
			{
				title: 'Personal Information',
				content: [
					'When you register on our Services, subscribe to our newsletters, or contact us, we may ask you to provide us with certain personally identifiable information, including but not limited to:',
					[
						'Your name',
						'Email address',
						'Phone number',
						'Mailing address',
						'Any other information you choose to provide',
					],
				],
			},
			{
				title: 'Usage Data',
				content: [
					'We automatically collect information about your interactions with our Services. This data may include:',
					[
						"Your device's Internet Protocol (IP) address",
						'Browser type and version',
						'Pages of our Services that you visit',
						'The time and date of your visit',
						'The time spent on those pages',
						'Unique device identifiers',
						'Other diagnostic data',
					],
				],
			},
			{
				title: 'Cookies and Tracking Technologies',
				content: [
					'We use cookies and similar tracking technologies to monitor activity on our Services and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some parts of our Services.',
				],
			},
		],
	},
	{
		title: 'How We Use Your Information',
		content: [
			'We use the collected information for various purposes, including:',
			[
				'To Provide and Maintain Our Services: To deliver the Services you request and to manage your account.',
				'To Communicate with You: To send you newsletters, marketing materials, and other information that may be of interest to you.',
				'To Improve Our Services: To analyze usage data and enhance the user experience.',
				'For Legal Compliance: To comply with applicable laws, regulations, or legal requests.',
				'To Ensure Security: To protect the security and integrity of our Services and to prevent fraud or abuse.',
			],
		],
	},
	{
		title: 'Data Sharing and Disclosure',
		content: [
			'We do not sell, trade, or otherwise transfer your personal information to outside parties, except in the following circumstances:',
			[
				'Legal Obligations: We may disclose your personal information if required to do so by law or in response to valid requests by public authorities.',
				'Business Transfers: If we are involved in a merger, acquisition, or asset sale, your personal information may be transferred. We will notify you before your personal information is transferred and becomes subject to a different privacy policy.',
				'Protection of Rights: We may disclose your personal information in the good faith belief that such action is necessary to protect and defend the rights or property of HobbyMate, prevent or investigate possible wrongdoing in connection with our Services, protect the personal safety of users, or protect against legal liability.',
			],
		],
	},
	{
		title: 'Your Rights',
		content: [
			'You have certain rights regarding your personal information, including:',
			[
				'Access: You have the right to request copies of your personal information.',
				'Correction: You have the right to request that we correct any information you believe is inaccurate or incomplete.',
				'Deletion: You have the right to request that we delete your personal information under certain conditions.',
			],
			'Objection and Restriction: You have the right to object to or request the restriction of the processing of your personal information. To exercise these rights, please contact us using the contact information provided below.',
		],
	},
	{
		title: 'Security of Your Information',
		content: [
			'The security of your personal information is important to us, and we strive to use commercially acceptable means to protect it. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.',
		],
	},
	{
		title: 'Changes to This Policy',
		content: [
			'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.'
		],
	},
];
