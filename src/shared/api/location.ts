'use server';
import { z } from 'zod';
import { createFetch } from '@shared/api/requests';
import { locationByIpServiceUrl, locationByIpServiceParams } from '@features/auth/constants';
import { createMockFetch } from '@shared/api/mocks';
import mockData from '@features/auth/api/mocks/locationByIp.mock.json';

const LocationByIpSchema = z.object({
	ip: z.string().ip(),
	country_name: z.string(),
	city: z.string(),
});

type LocationByIpResponse = z.infer<typeof LocationByIpSchema>;

const fetchLocationByIp = () =>
	createFetch({
		baseUrl: locationByIpServiceUrl,
		searchParams: locationByIpServiceParams,
		schema: LocationByIpSchema,
	});

const mockFetchLocationByIp = () =>
	createMockFetch<LocationByIpResponse>({
		mockData,
		schema: LocationByIpSchema,
	});

export const getLocationByIp = async () =>
	process.env.NODE_ENV === 'development'
		? await mockFetchLocationByIp()
		: await fetchLocationByIp();
