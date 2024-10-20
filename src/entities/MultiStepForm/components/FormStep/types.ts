import { FieldValues } from 'react-hook-form';
import { TFormStep } from '@entities/MultiStepForm/types';
import { PropsWithChildren } from 'react';

export type FormStepProps<T extends FieldValues> = Omit<FormStepUIProps, 'progressValue'> & {
	stepInputs: TFormStep<T>;
};

export type FormStepUIProps = PropsWithChildren<{
	currentStep: number;
	stepCount: number;
	progressValue: number;
	handleNextStep?: () => void;
	handleBackStep?: () => void;
	nextButtonText?: string | null;
	description?: string | null;
}>;
