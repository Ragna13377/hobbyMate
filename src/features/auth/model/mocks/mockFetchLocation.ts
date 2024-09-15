import { createMockFetch } from '@shared/api/mocks';
import { PropsWithSignal, TFetchParams } from '@shared/types';
import { TFetchLocation } from '@features/auth/types';
import { fetchLocationSchema, LocationResponse } from '@features/auth/shema';
import mockData from './location.mock.json';

export const locationFilterLimit = 5;

type MockFetchLocationProps = TFetchLocation & TFetchParams;

const filterLocation = (query: string): LocationResponse => ({
	features: mockData.features
		.filter(({ properties: { city } }) => city.toLowerCase().includes(query.toLowerCase()))
		.slice(0, locationFilterLimit)
		.map(({ properties: { city, state, country } }) => ({
			properties: {
				city: city || undefined,
				state: state || undefined,
				country: country || undefined,
			},
		})),
});

export const mockFetchLocation = ({ text, ...rest }: PropsWithSignal<MockFetchLocationProps>) => {
	const filteredData = filterLocation(text);
	return createMockFetch<LocationResponse>({
		mockData: filteredData,
		schema: fetchLocationSchema,
	})(rest);
};
