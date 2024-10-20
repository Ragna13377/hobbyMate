'use client';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { calculateProgress } from '@shared/utils/calculationUtils';
import { FormStepProps } from '../types';
import { useFormStep } from '../hooks/useFormStep';
import FormStepUi from '../ui/FormStepUI';

export const baseProgressShift = 10;

export const FormStep = <T extends FieldValues>({
	currentStep,
	stepCount,
	stepInputs,
	description,
	nextButtonText,
	children,
	...rest
}: FormStepProps<T>) => {
	const { nextStepHandler, backStepHandler } = useFormStep({
		currentStep,
		stepCount,
		stepInputs,
		...rest,
	});
	const progressValue = calculateProgress(currentStep, stepCount, baseProgressShift);
	return (
		<FormStepUi
			currentStep={currentStep}
			stepCount={stepCount}
			progressValue={progressValue}
			description={description}
			nextButtonText={nextButtonText}
			handleBackStep={backStepHandler}
			handleNextStep={nextStepHandler}
		>
			{children}
		</FormStepUi>
	);
};
