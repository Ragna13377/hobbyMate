type TError = { message?: string };
export type TFieldError = TError | TError[];
export const getErrorMessage = (error?: TFieldError): string | undefined => {
	if (!error) return;
	return Array.isArray(error) ? error[0].message : error.message;
};

export const logErrorMessage = (error: unknown): string => {
	const errorMessage = error instanceof Error ? error.message : `Something wrong. Unknown Error: ${error}`
	console.log(errorMessage);
	return errorMessage;
};
