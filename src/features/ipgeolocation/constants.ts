export const geoLocationServiceUrl = 'https://api.ipgeolocation.io/ipgeo';
export const UrlSearchParams = {
	apiKey: process.env.NEXT_PUBLIC_IPGEOLOCATION_KEY ?? '',
	fields: 'city',
};
