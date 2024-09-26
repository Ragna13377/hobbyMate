import { z } from 'zod';

export const fetchLocationByIpSchema = z.object({
	ip: z.string().ip(),
	country_name: z.string(),
	city: z.string(),
});

export const fetchLocationByQuerySchema = z.object({
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

export type LocationByIpResponse = z.infer<typeof fetchLocationByIpSchema>;
export type LocationByQueryResponse = z.infer<typeof fetchLocationByQuerySchema>;
