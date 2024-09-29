import { createFetch } from '@shared/api/requests';
import { LocationByIpSchema } from '@features/auth/shema';
import { locationByIpServiceUrl, locationByIpServiceParams } from '@features/auth/constants';

export const fetchLocationByIp = () =>
	createFetch({
		baseUrl: locationByIpServiceUrl,
		searchParams: locationByIpServiceParams,
		schema: LocationByIpSchema,
	});
