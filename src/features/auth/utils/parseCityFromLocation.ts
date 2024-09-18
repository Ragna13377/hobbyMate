import { LocationResponse } from '@features/auth/shema';

export const parseCityFromLocation = (data: LocationResponse | undefined): string[] => {
	if (data && data.features.length > 0) {
		const uniqueLocations = new Set();
		return data.features.reduce<string[]>((acc, { properties: { city, state, country } }) => {
			if (!city) return acc;
			const key = `${state ?? ''}-${country ?? ''}`;
			if (!uniqueLocations.has(key)) {
				uniqueLocations.add(key);
				const result = [city, state, country].filter(Boolean).join(', ');
				acc.push(result);
			}
			return acc;
		}, []);
	}
	return [];
};
