import { ZodSchema } from 'zod';
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { logErrorMessage } from '@shared/utils/errorsUtils';
import { MultiStepFormProps, TFormSchemaResponse } from '../types';
import { useDialogContext } from '@entities/DialogContainer/hooks/useDialogContext';

export const useMultiStepForm = <TSchema extends ZodSchema>({
	config,
	submitHandler,
	errorHandler,
}: MultiStepFormProps<TSchema>) => {
	const [isLoading, setIsLoading] = useState(false);
	const dialogContext = useDialogContext();
	const form = useForm<TFormSchemaResponse<TSchema>>({
		...config,
	});
	const { handleSubmit, clearErrors, setError } = form;
	const onSubmit: SubmitHandler<TFormSchemaResponse<TSchema>> = async (formData) => {
		clearErrors('root');
		try {
			setIsLoading(true);
			await submitHandler?.(formData);
			dialogContext?.setIsOpen(false);
		} catch (error) {
			logErrorMessage(error);
			//TODO: рутовую ошибку показать на форме. Найти место
			//TODO возможен sonner
			//TODO проверка уникальности имени до отправки
		} finally {
			setIsLoading(false);
		}
	};
	const onError: SubmitErrorHandler<TFormSchemaResponse<TSchema>> = (error) => {
		errorHandler?.();
		const message = logErrorMessage(error);
		setError('root', { message });
	};
	return {
		form,
		onSubmit: handleSubmit(onSubmit, onError),
		isLoading,
	};
};
