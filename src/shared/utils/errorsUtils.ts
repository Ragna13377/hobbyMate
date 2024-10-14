type TError = { message?: string };
type TFieldError = TError | TError[];
export const getErrorMessage = (error?: TFieldError): string | undefined => {
	if (!error) return;
	return Array.isArray(error) ? error[0].message : error.message;
};
