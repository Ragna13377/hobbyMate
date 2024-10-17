import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useDialogContext } from '@entities/DialogContainer/hooks/useDialogContext';

import { defaultAuthValues as defaultValues } from '../constants';
import { signUpSchema, SignUpSchemaProps } from '../schema';
import { registerUser } from '../actions';
import { handleCredentialSignIn } from '@features/auth/utils/authUtils';
import { logErrorMessage } from '@shared/utils/errorsUtils';

export const useSignUpForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<SignUpSchemaProps>({
		defaultValues: {
			...defaultValues,
			city: sessionStorage.getItem('city') ?? '',
			country: sessionStorage.getItem('country') ?? '',
		},
		reValidateMode: 'onSubmit',
		resolver: zodResolver(signUpSchema),
	});
	const { handleSubmit, clearErrors, setError } = form;
	const dialogContext = useDialogContext();

	const onSubmit: SubmitHandler<SignUpSchemaProps> = async (formData) => {
		clearErrors('root');
		try {
			setIsLoading(true);
			const user = await registerUser(formData);
			if (!user) throw new Error('User not created');
			const res = await handleCredentialSignIn({
				username: formData.username,
				password: formData.password,
			});
			if (!res || !res.ok) throw new Error('Sign in failed');
			//TODO sonner
		} catch (error) {
			logErrorMessage(error);
			//TODO sonner
		} finally {
			setIsLoading(false);
			dialogContext?.setIsOpen(false);
		}
	};
	const onError: SubmitErrorHandler<SignUpSchemaProps> = (error) => {
		console.log('Error sending', error);
		setError('root', { message: 'Something went wrong' });
	};

	return {
		form,
		onSubmitForm: handleSubmit(onSubmit, onError),
		isLoading,
	};
};
