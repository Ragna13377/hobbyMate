'use client';
import React from 'react';
import prisma from '@shared/lib/prisma';
import { AutocompleteInput } from '@entities/AutocompleteSearch';
import { getHobby } from '@features/auth/components/AuthForm/api';
import { BadgeProvider } from '@shared/providers';
// import { fetchCityByQuery } from '@features/auth/model/fetchLocationByQuery';

// const getCountryByQuery = async (query: string) => {
// 	return prisma.country.findMany({
// 		where: { name: { startsWith: query } },
// 	});
// };
export const AboutPage = () => (
	// fetchCityByQuery('Au').then((data) => console.log(data));
	// return <div>About</div>;
	<BadgeProvider>
		<AutocompleteInput name='hobbies' hasBadges placeholder='Enter hobbies' fetchData={getHobby} />
	</BadgeProvider>
);
