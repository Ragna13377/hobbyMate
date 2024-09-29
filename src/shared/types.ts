import { ZodSchema } from 'zod';

export type THTMLInputType = 'text' | 'password' | 'email' | 'number' | 'url' | 'tel' | 'search';

export type TTimeout = ReturnType<typeof setTimeout> | null;

export type TFetch<T> = {
	baseUrl: string;
	searchParams: Record<string, unknown>;
	schema: ZodSchema<T>;
};

export type TFetchParams = Partial<{
	status: number;
	headers: Record<string, string>;
	delay: number;
}>;

export type PropsWithSignal<T> = T & {
	signal?: AbortSignal;
};
