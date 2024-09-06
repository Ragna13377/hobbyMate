import { createFetch } from '@shared/services/api';
import { fetchCitySchema } from '@features/auth/shema';
import { cityServiceUrl, cityServiceParams } from '@features/auth/constants';

export const fetchCity = () =>
	createFetch({
		baseUrl: cityServiceUrl,
		params: cityServiceParams,
		schema: fetchCitySchema,
	});
