import { createMockFetch } from '@shared/api/mocks';
import { PropsWithSignal, TFetchParams } from '@shared/types';
import { TFetchLocation } from '@features/auth/types';
import { LocationByQuerySchema, LocationByQueryResponse } from '@features/auth/shema';
import mockData from './locationByQuery.mock.json';

const locationFilterLimit = 5;

type MockFetchLocationProps = TFetchLocation & TFetchParams;

const filterLocation = (query: string): LocationByQueryResponse => ({
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

export const mockFetchLocationByQuery = ({
	query,
	...rest
}: PropsWithSignal<MockFetchLocationProps>) => {
	const filteredData = filterLocation(query);
	return createMockFetch<LocationByQueryResponse>({
		mockData: filteredData,
		schema: LocationByQuerySchema,
		...rest,
	});
};
