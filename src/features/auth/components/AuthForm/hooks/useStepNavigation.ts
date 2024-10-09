import { useEffect, useState } from 'react';
import { TAuthStep } from '@features/auth/components/types';
import { UseFormReturn } from 'react-hook-form';
import { AuthSchemaProps } from '@features/auth/components/AuthForm/shema';

export const useStepNavigation = (
	form: UseFormReturn<AuthSchemaProps, unknown, undefined>,
	authSteps: TAuthStep[]
) => {
	const [step, setStep] = useState(0);
	const { setFocus, setError, clearErrors, trigger, watch } = form;
	const stepInputs = authSteps[step];
	const stepCount = authSteps.length;

	useEffect(() => {
		setFocus(stepInputs[0].name, { shouldSelect: true });
	}, [setFocus, stepInputs]);

	const handleNextStep = async () => {
		if (step < stepCount) {
			const fieldsToValidate = stepInputs.map(({ name }) => name);
			const validityResult = await Promise.all(fieldsToValidate.map((f) => trigger(f)));
			if (fieldsToValidate.includes('repeatPassword')) {
				const fieldName = 'repeatPassword';
				const repeatPasswordIndex = fieldsToValidate.indexOf(fieldName);
				const isPasswordMatch = watch('password') === watch(fieldName);
				if (!isPasswordMatch) {
					validityResult[repeatPasswordIndex] = false;
					setError(fieldName, { message: 'Passwords do not match' });
				} else clearErrors(fieldName);
			}
			const invalidIndex = validityResult.findIndex((v) => !v);
			if (invalidIndex !== -1) setFocus(fieldsToValidate[invalidIndex]);
			else if (step < stepCount - 1) setStep((p) => p + 1);
		}
	};
	const handleBackStep = () => {
		setStep((s) => s - 1);
	};

	return {
		step,
		stepCount,
		stepInputs,
		handleBackStep,
		handleNextStep,
	};
};
