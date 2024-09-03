import { fetchWithCatch } from '@shared/utils/handleRequest';
import { geoLocationServiceUrl, UrlSearchParams } from '@features/ipgeolocation/constants';
import { cityResponse, fetchCitySchema } from '@features/ipgeolocation/shema';
import mockData from '@features/ipgeolocation/mocks/city.mock.json';
//TODO: проверить наследуемость функционала геолокации в контексте fsd
export const getCity = async (): Promise<cityResponse | undefined> => {
	const queryParams = new URLSearchParams(UrlSearchParams).toString();
	return fetchWithCatch(() => fetch(`${geoLocationServiceUrl}?${queryParams}`), fetchCitySchema);
};

export const getCityMock = async (): Promise<cityResponse | undefined> =>
	fetchWithCatch(
		() =>
			new Promise<Response>((resolve) => {
				resolve(
					new Response(JSON.stringify(mockData), {
						status: 200,
						headers: {
							'Content-Type': 'application/json',
						},
					})
				);
			}),
		fetchCitySchema
	);
