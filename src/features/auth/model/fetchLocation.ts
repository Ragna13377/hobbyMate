import { locationServiceParams, locationServiceUrl } from '@features/auth/constants';
import { createFetch } from '@shared/services/api';
import { fetchLocationSchema } from '@features/auth/shema';

export const fetchLocation = (text: string) =>
	createFetch({
		baseUrl: locationServiceUrl,
		params: {
			...locationServiceParams,
			text,
		},
		schema: fetchLocationSchema,
	});
