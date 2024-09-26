'use server';
import { mockFetchLocationByIp } from '@features/auth/model/mocks/mockFetchLocationByIp';
import { fetchLocationByIp } from '@features/auth/model/fetchLocationByIp';

export const getCityByIp = async () =>
	process.env.NODE_ENV === 'development'
		? await mockFetchLocationByIp()
		: await fetchLocationByIp();
