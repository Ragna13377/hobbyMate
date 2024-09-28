import { z } from 'zod';

export const authSchema = z
	.object({
		username: z
			.string()
			.min(3, { message: 'Username is too short' })
			.max(20, { message: 'Username is too long. Maximum length is 20 characters.' }),
		password: z
			.string()
			.min(8, { message: 'Password must be at least 8 characters long' })
			.max(50, { message: 'Password must be at most 50 characters long' })
			.regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
			.regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
			.regex(/[0-9]/, { message: 'Password must contain at least one number' }),
		repeatPassword: z.string(),
		country: z.string().min(2, { message: 'Country is required to simplify the search' }),
		city: z.string(),
		hobbies: z.string(),
		// .array(z.string().min(2, { message: 'Each hobby must be at least 2 characters' }))
		// .nonempty({ message: 'Select at least one hobby' }),
	})
	.refine((values) => values.password === values.repeatPassword, {
		message: 'Passwords do not match',
		path: ['repeatPassword'],
	});
export type AuthSchemaProps = z.infer<typeof authSchema>;
