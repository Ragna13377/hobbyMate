import { LocationByQueryResponse } from '../api/fetchLocationByQuery';

export const filterCity = (
	data: LocationByQueryResponse | undefined,
	countryCodeFilter?: string | null
): string[] => {
	if (data && data.results.length > 0) {
		const uniqueLocations = new Set();
		return data.results.reduce<string[]>((acc, { city, state, country, country_code }) => {
			if (
				!city ||
				(countryCodeFilter && country_code?.toLowerCase() !== countryCodeFilter.toLowerCase())
			)
				return acc;
			const locationParts = city === state ? [city, country] : [city, state, country];
			const location = locationParts.filter(Boolean).join(', ');
			if (!uniqueLocations.has(location)) {
				uniqueLocations.add(location);
				acc.push(location);
			}
			return acc;
		}, []);
	}
	return [];
};
