import { Path, FieldValues, UseFormReturn } from 'react-hook-form';

type TValidatePassword<T extends FieldValues> = {
	validityResult: boolean[];
	fieldsToValidate: Path<T>[];
	form: UseFormReturn<T>;
};
export const validatePassword = <T extends FieldValues>({
	form,
	validityResult,
	fieldsToValidate,
}: TValidatePassword<T>) => {
	const { watch, setError, clearErrors } = form;
	const repeatPasswordField = 'repeatPassword' as Path<T>;
	const passwordField = 'password' as Path<T>;
	const isPasswordMatch = watch(passwordField) === watch(repeatPasswordField);
	if (!isPasswordMatch) {
		const repeatPasswordIndex = fieldsToValidate.indexOf(repeatPasswordField);
		const isPasswordMatch = watch(passwordField) === watch(repeatPasswordField);
		if (!isPasswordMatch) {
			validityResult[repeatPasswordIndex] = false;
			setError(repeatPasswordField, { message: 'Passwords do not match' });
		} else clearErrors(repeatPasswordField);
	}
};
