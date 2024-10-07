import React from 'react';

type PrivacySectionListProps = {
	items: string[];
};

const PrivacySectionList = ({ items }: PrivacySectionListProps) => (
	<ul className='list-disc ml-5'>
		{items.map((item, index) => {
			const [title, description] = item.split(':', 2);
			return (
				<li key={index}>
					{description ? (
						<>
							<span>{title}: </span> {description}
						</>
					) : (
						item
					)}
				</li>
			);
		})}
	</ul>
);

export default PrivacySectionList;
