import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { TAuthField } from '@features/auth/components/types';
import { defaultAuthValues as defaultValues } from '../constants';
import { authSchema, AuthSchemaProps } from '../shema';
import { getCityByIp } from '../actions';

export const useAuthForm = (stepInputs: TAuthField<AuthSchemaProps>[][]) => {
	const [step, setStep] = useState(0);
	const inputFields = stepInputs[step];
	const stepCount = stepInputs.length;
	const form = useForm<AuthSchemaProps>({
		defaultValues,
		resolver: zodResolver(authSchema),
	});
	const { handleSubmit, clearErrors, setValue, setError, setFocus, trigger } = form;
	useEffect(() => {
		getCityByIp().then((data) => {
			if (data) {
				setValue('country', data.country_name || '');
				setValue('city', data.city || '', { shouldDirty: false });
			}
		});
	}, [form, setValue]);
	useEffect(() => {
		setFocus(inputFields[0].name, { shouldSelect: true });
	}, [inputFields, form, setFocus, step]);
	const onSubmit: SubmitHandler<AuthSchemaProps> = () => {
		try {
			clearErrors('root');
			console.log('success');
		} catch (err) {
			console.log(err);
			setError('root', { message: 'Something went wrong' });
		}
	};
	const onError: SubmitErrorHandler<AuthSchemaProps> = (error) =>
		console.log('Error sending', error);

	const handleNextStep = async () => {
		if (step < stepCount) {
			const fieldsToValidate = inputFields;
			const validityResult = await Promise.all(fieldsToValidate.map(({ name }) => trigger(name)));
			const invalidIndex = validityResult.findIndex((v) => !v);
			if (invalidIndex === -1) {
				if (step < stepCount - 1) setStep((p) => p + 1);
			} else setFocus(fieldsToValidate[invalidIndex].name);
		}
	};
	const handleBackStep = () => {
		setStep((s) => s - 1);
	};

	return {
		form,
		onSubmitForm: handleSubmit(onSubmit, onError),
		stepIndex: step,
		stepCount,
		handleBackStep,
		handleNextStep,
	};
};
