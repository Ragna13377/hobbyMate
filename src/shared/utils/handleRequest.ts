import { ZodSchema } from 'zod';

export const handleResponse = async (response: Response) => {
	if (!response.ok)
		throw new Error(
			`Request failed. Status: ${response.status}. ${response.statusText}`,
		);
	return response.json();
};

export const fetchWithCatch = async <T>(
	requestFn: () => Promise<Response>,
	schema: ZodSchema<T>
): Promise<T | undefined> => {
	try {
		const response = await handleResponse(await requestFn());
		return schema.parse(response);
	} catch (error: unknown) {
		if (error instanceof Error) console.log(error.message);
		else console.log('Something wrong. Unknown Error');
	}
};
