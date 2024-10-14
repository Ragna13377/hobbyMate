'use server';
import { createFetch } from '@shared/api/requests';
import { LocationByIpSchema } from '@features/auth/schema';
import { locationByIpServiceUrl, locationByIpServiceParams } from '@features/auth/constants';

export const fetchLocationByIp = () =>
	createFetch({
		baseUrl: locationByIpServiceUrl,
		searchParams: locationByIpServiceParams,
		schema: LocationByIpSchema,
	});
