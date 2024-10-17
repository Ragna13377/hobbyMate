import { z } from 'zod';

export const userSchema = z.object({
	id: z.string().cuid(),
	username: z.string(),
	password: z.string(),
	country: z.string(),
	city: z.string(),
});

export const accountSchema = z.object({
	userId: z.string(),
	provider: z.string(),
	providerAccountId: z.string(),
	type: z.string(),
	refresh_token: z.string(),
	access_token: z.string(),
	expires_at: z.number(),
	token_type: z.string(),
	scope: z.string(),
	id_token: z.string(),
	session_state: z.string(),
});

export type AccountSchemaProps = z.infer<typeof accountSchema>;
export type UserSchemaProps = z.infer<typeof userSchema>;
