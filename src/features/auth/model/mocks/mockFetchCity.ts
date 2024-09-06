import { createMockFetch } from '@shared/services/api';
import { cityResponse, fetchCitySchema } from '@features/auth/shema';
import mockData from './city.mock.json';

export const mockFetchCity = createMockFetch<cityResponse>({
	mockData,
	schema: fetchCitySchema,
});
