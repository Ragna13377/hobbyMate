import { z } from 'zod';

export const LocationByIpSchema = z.object({
	ip: z.string().ip(),
	country_name: z.string(),
	city: z.string(),
});

export const LocationByQuerySchema = z.object({
	results: z.array(
		z.object({
			city: z.union([z.string(), z.undefined()]),
			state: z.union([z.string(), z.undefined()]),
			country: z.union([z.string(), z.undefined()]),
			country_code: z.union([z.string(), z.undefined()]),
		})
	),
});

export const CountryByQuerySchema = z.array(
	z.object({
		name: z.string(),
	})
);

export const CountryByNameSchema = z
	.object({
		name: z.string(),
		code: z.string(),
	})
	.nullable();

export const HobbySchema = z.array(
	z.object({
		name: z.string(),
	})
)

export type HobbyResponse = z.infer<typeof HobbySchema>;
export type CountryByNameResponse = z.infer<typeof CountryByNameSchema>;
export type CountryByQueryResponse = z.infer<typeof CountryByQuerySchema>;
export type LocationByQueryResponse = z.infer<typeof LocationByQuerySchema>;
export type LocationByIpResponse = z.infer<typeof LocationByIpSchema>;
