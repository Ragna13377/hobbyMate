import { useEffect } from 'react';
import { Path, FieldValues, useFormContext } from 'react-hook-form';
import { FormStepProps } from '../types';
import { validatePassword } from '../utils';

export const useFormStep = <T extends FieldValues>({
	currentStep,
	handleNextStep,
	handleBackStep,
	stepCount,
	stepInputs,
}: Omit<FormStepProps<T>, 'nextButtonText' | 'description'>) => {
	const form = useFormContext();
	const {
		control,
		formState: { errors },
		setFocus,
		trigger,
	} = form;
	useEffect(() => {
		if (stepInputs.length > 0) setFocus(stepInputs[0].name, { shouldSelect: true });
	}, [setFocus, stepInputs]);

	const nextStepHandler = async () => {
		if (currentStep < stepCount) {
			const fieldsToValidate = stepInputs.map(({ name }) => name);
			const validityResult = await Promise.all(fieldsToValidate.map((f) => trigger(f)));
			if (fieldsToValidate.includes('repeatPassword' as Path<T>)) {
				validatePassword({ fieldsToValidate, validityResult, form });
			}
			const invalidIndex = validityResult.findIndex((v) => !v);
			if (invalidIndex !== -1) setFocus(fieldsToValidate[invalidIndex]);
			else handleNextStep?.();
		}
	};
	const backStepHandler = () => {
		handleBackStep?.();
	};
	return {
		control,
		errors,
		nextStepHandler,
		backStepHandler,
	};
};
