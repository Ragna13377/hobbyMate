import { z } from 'zod';

export const fetchCitySchema = z.object({
	ip: z.string().ip(),
	city: z.string(),
});

export type cityResponse = z.infer<typeof fetchCitySchema>;
