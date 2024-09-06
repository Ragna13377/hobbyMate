import { z } from 'zod';

export const fetchCitySchema = z.object({
	ip: z.string().ip(),
	city: z.string(),
});

export const fetchLocationSchema = z.object({
	features: z.array(
		z.object({
			properties: z.object({
				city: z.union([z.string(), z.undefined()]),
				state: z.union([z.string(), z.undefined()]),
				country: z.union([z.string(), z.undefined()]),
			}),
		})
	),
});

export type cityResponse = z.infer<typeof fetchCitySchema>;
export type locationResponse = z.infer<typeof fetchLocationSchema>;
