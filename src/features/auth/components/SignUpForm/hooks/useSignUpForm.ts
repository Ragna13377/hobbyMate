import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useDialogContext } from '@entities/DialogContainer/hooks/useDialogContext';

import { defaultAuthValues as defaultValues } from '../constants';
import { signUpSchema, SignUpSchemaProps } from '../schema';
import { getCityByIp, registerUser } from '../actions';
import { credentialSignIn } from '@features/auth/utils/authUtils';


export const useSignUpForm = () => {
	const form = useForm<SignUpSchemaProps>({
		defaultValues,
		reValidateMode: 'onSubmit',
		resolver: zodResolver(signUpSchema),
	});
	const { handleSubmit, clearErrors, setValue, setError, watch } = form;
	const dialogContext = useDialogContext();
	useEffect(() => {
		getCityByIp().then((data) => {
			if (data && watch('country') === '' && watch('city') === '') {
				setValue('country', data.country_name || '', { shouldDirty: false });
				setValue('city', data.city || '', { shouldDirty: false });
			}
		});
	}, [form, setValue, watch]);

	const onSubmit: SubmitHandler<SignUpSchemaProps> = async (formData) => {
		clearErrors('root');
		const user = await registerUser(formData);
		credentialSignIn({
			username: formData.username,
			password: formData.password,
		}).then((data) => {
			if (data && data.ok) {
				//TODO sonner
			}
		});
		dialogContext?.setIsOpen(false);
	};
	const onError: SubmitErrorHandler<SignUpSchemaProps> = (error) => {
		console.log('Error sending', error);
		setError('root', { message: 'Something went wrong' });
	};

	return {
		form,
		onSubmitForm: handleSubmit(onSubmit, onError),
	};
};
