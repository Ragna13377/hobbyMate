import {
	createDebouncedMockFetch,
	createMockFetch,
} from '@shared/api/mocks';
import { PropsWithDebounce, PropsWithSignal, TFetchParams } from '@shared/types';
import { TFetchLocation } from '@features/auth/types';
import { fetchLocationSchema, LocationResponse } from '@features/auth/shema';
import mockData from './location.mock.json';

const locationFilterLimit = 5;

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

export const mockFetchLocation = ({ query, ...rest }: PropsWithSignal<MockFetchLocationProps>) => {
	const filteredData = filterLocation(query);
	return createMockFetch<LocationResponse>({
		mockData: filteredData,
		schema: fetchLocationSchema,
		...rest,
	});
};

export const mockFetchLocation2 = ({
	query,
	...rest
}: PropsWithDebounce<MockFetchLocationProps>) => {
	const filteredData = filterLocation(query);
	return createDebouncedMockFetch<LocationResponse>({
		mockData: filteredData,
		schema: fetchLocationSchema,
		...rest,
	});
};
