import { createFetch } from '@shared/api/requests';
import { fetchCitySchema } from '@features/auth/shema';
import { cityServiceUrl, cityServiceParams } from '@features/auth/constants';

export const fetchCity = () =>
	createFetch({
		baseUrl: cityServiceUrl,
		searchParams: cityServiceParams,
		schema: fetchCitySchema,
	});
