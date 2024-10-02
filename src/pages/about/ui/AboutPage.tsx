'use client';
import React from 'react';
import prisma from '@shared/lib/prisma';
import { AuthSchemaProps } from '@features/auth/components/AuthForm/shema';
import { toTitleCase } from '@shared/utils/stringUtils';
import { AutocompleteInput } from '@entities/AutocompleteSearch';
import { getCountryByQuery } from '@features/auth/components/AuthForm/api';
// import { fetchCityByQuery } from '@features/auth/model/fetchLocationByQuery';

// const getCountryByQuery = async (query: string) => {
// 	return prisma.country.findMany({
// 		where: { name: { startsWith: query } },
// 	});
// };
export const AboutPage = () => {
	// fetchCityByQuery('Au').then((data) => console.log(data));
	return <div>About</div>;

	// <AutocompleteInput<AuthSchemaProps>
	// 	name='hobbies'
	// 	placeholder='Enter hobbies'
	// 	fetchData={getCountryByQuery}
	// />
}


