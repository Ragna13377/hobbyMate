import { createMockFetch } from '@shared/api/mocks';
import { CityResponse, fetchCitySchema } from '@features/auth/shema';
import mockData from './city.mock.json';

export const mockFetchCity = createMockFetch<CityResponse>({
	mockData,
	schema: fetchCitySchema,
});
