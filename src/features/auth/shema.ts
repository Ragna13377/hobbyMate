import { z } from 'zod';

export const LocationByIpSchema = z.object({
	ip: z.string().ip(),
	country_name: z.string(),
	city: z.string(),
});

export const LocationByQuerySchema = z.object({
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

export const CountryByQuerySchema = z.array(
	z.object({
		name: z.string(),
		code: z.string(),
	})
);

export type CountryByQueryResponse = z.infer<typeof CountryByQuerySchema>;
export type LocationByIpResponse = z.infer<typeof LocationByIpSchema>;
export type LocationByQueryResponse = z.infer<typeof LocationByQuerySchema>;
