import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { defaultAuthValues as defaultValues } from '../constants';
import { authSchema, AuthSchemaProps } from '../shema';
import { getCityByIp } from '../actions';

export const useAuthForm = () => {
	const form = useForm<AuthSchemaProps>({
		defaultValues,
		reValidateMode: 'onSubmit',
		resolver: zodResolver(authSchema),
	});
	const { handleSubmit, clearErrors, setValue, setError } = form;
	useEffect(() => {
		getCityByIp().then((data) => {
			if (data) {
				setValue('country', data.country_name || '');
				setValue('city', data.city || '', { shouldDirty: false });
			}
		});
	}, [form, setValue]);

	const onSubmit: SubmitHandler<AuthSchemaProps> = (formData) => {
		try {
			clearErrors('root');
			console.log(formData);
			console.log('success');
		} catch (err) {
			console.log(err);
			setError('root', { message: 'Something went wrong' });
		}
	};
	const onError: SubmitErrorHandler<AuthSchemaProps> = (error) =>
		console.log('Error sending', error);

	return {
		form,
		onSubmitForm: handleSubmit(onSubmit, onError),
	};
};
