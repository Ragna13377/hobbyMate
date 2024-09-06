import { createMockFetch } from '@shared/services/api';
import { fetchLocationSchema, locationResponse } from '@features/auth/shema';
import mockData from './location.mock.json';

export const locationFilterLimit = 5;

const filterLocation = (query: string) => ({
	features: mockData.features
		.filter(({ properties: { city } }) => city.toLowerCase().includes(query.toLowerCase()))
		.slice(0, locationFilterLimit),
});

export const mockFetchLocation = (text: string) => {
	const filteredData = filterLocation(text);
	return createMockFetch<locationResponse>({
		mockData: filteredData,
		schema: fetchLocationSchema,
	})();
};
