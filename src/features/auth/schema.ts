import { z } from 'zod';

export const userSchema = z.object({
	id: z.string().cuid(),
	name: z.string().optional().nullable(),
	email: z.string().optional().nullable(),
	emailVerified: z.date().optional().nullable(),
	image: z.string().optional().nullable(),
	password: z.string().optional().nullable(),
	country: z.string().optional().nullable(),
	city: z.string().optional().nullable(),
});

export const accountSchema = z.object({
	id: z.string().cuid(),
	userId: z.string(),
	type: z.string(),
	provider: z.string(),
	providerAccountId: z.string(),
	refresh_token: z.string().optional().nullable(),
	access_token: z.string().optional().nullable(),
	expires_at: z.number().optional().nullable(),
	token_type: z.string().optional().nullable(),
	scope: z.string().optional().nullable(),
	id_token: z.string().optional().nullable(),
	session_state: z.string().optional().nullable(),
});

export type AccountSchemaProps = z.infer<typeof accountSchema>;
export type UserSchemaProps = z.infer<typeof userSchema>;
