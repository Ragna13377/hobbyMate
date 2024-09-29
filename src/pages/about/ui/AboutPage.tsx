import React from 'react';
import prisma from '@shared/lib/prisma';
import { fetchCityByQuery } from '@features/auth/model/fetchLocationByQuery';

// const getCountryByQuery = async (query: string) => {
// 	return prisma.country.findMany({
// 		where: { name: { startsWith: query } },
// 	});
// };
export const AboutPage = () => {
	fetchCityByQuery('Au').then((data) => console.log(data));
	return <div>About</div>;
};
