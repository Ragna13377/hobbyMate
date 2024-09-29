import { createMockFetch } from '@shared/api/mocks';
import { LocationByIpResponse, LocationByIpSchema } from '@features/auth/shema';
import mockData from './locationByIp.mock.json';

export const mockFetchLocationByIp = () =>
	createMockFetch<LocationByIpResponse>({
		mockData,
		schema: LocationByIpSchema,
	});
