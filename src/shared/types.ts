import { ZodSchema } from 'zod';

export type THTMLInputType = 'text' | 'password' | 'email' | 'number' | 'url' | 'tel' | 'search';

export type TTimeout = ReturnType<typeof setTimeout> | null;

export type fetchProps<T> = {
	baseUrl: string;
	params: Record<string, unknown>;
	schema: ZodSchema<T>;
};

export type mockFetchProps<T> = {
	mockData: T;
	schema: ZodSchema<T>;
};
export type MockFetchParams = {
	status?: number;
	delay?: number;
	headers?: Record<string, string>;
};
