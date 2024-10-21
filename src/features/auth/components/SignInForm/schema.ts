import { z } from 'zod';

export const signInSchema = z.object({
	name: z.string().min(1, { message: 'You forgot username' }),
	password: z.string().min(1, { message: 'You forgot password' }),
});

export type SignInSchemaResponse = z.infer<typeof signInSchema>;
