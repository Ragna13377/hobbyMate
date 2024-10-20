import { ZodSchema } from 'zod';
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { logErrorMessage } from '@shared/utils/errorsUtils';
import { MultiStepFormProps, TFormSchemaResponse } from '../types';

export const useMultiStepForm = <TSchema extends ZodSchema>({
	config,
	submitHandler,
	errorHandler,
}: MultiStepFormProps<TSchema>) => {
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<TFormSchemaResponse<TSchema>>({
		...config,
	});
	const { handleSubmit, clearErrors, setError } = form;
	const onSubmit: SubmitHandler<TFormSchemaResponse<TSchema>> = async (formData) => {
		clearErrors('root');
		try {
			setIsLoading(true);
			await submitHandler?.(formData);
		} catch (error) {
			logErrorMessage(error);
		} finally {
			setIsLoading(false);
		}
	};
	const onError: SubmitErrorHandler<TFormSchemaResponse<TSchema>> = (error) => {
		errorHandler?.();
		logErrorMessage(error);
		setError('root', { message: 'Something went wrong' });
	};
	return {
		form,
		onSubmit: handleSubmit(onSubmit, onError),
		isLoading,
	};
};
