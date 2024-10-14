import { z } from 'zod';

export const signUpSchema = z
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
		hobbies: z
			.array(z.string().min(2, { message: 'Hobby must be at least 2 characters' }), {
				required_error: 'Select at least one hobby',
			})
			.nonempty({ message: 'Select at least one hobby' }),
	})
	.refine((values) => values.password === values.repeatPassword, {
		message: 'Passwords do not match',
		path: ['repeatPassword'],
	});

export const accountSchema = z.object({
	userId: z.string(),
	provider: z.string(),
	providerAccountId: z.string(),
	type: z.string(),
	refresh_token: z.string().optional(),
	access_token: z.string().optional(),
	expires_at: z.number().optional(),
	token_type: z.string().optional(),
	scope: z.string().optional(),
	id_token: z.string().optional(),
	session_state: z.string().optional(),
});

export type SignUpSchemaProps = z.infer<typeof signUpSchema>;
export type AccountSchemaProps = z.infer<typeof accountSchema>;
