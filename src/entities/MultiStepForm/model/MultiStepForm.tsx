'use client';
import { ZodSchema } from 'zod';
import { PropsWithChildren } from 'react';
import { MultiStepFormProps } from '../types';
import { useMultiStepForm } from '../hooks/useMultiStepForm';
import MultiStepFormUI from '../ui/MultiStepFormUI';

export const MultiStepForm = <TSchema extends ZodSchema>({
	children,
	...rest
}: PropsWithChildren<MultiStepFormProps<TSchema>>) => {
	const formOptions = useMultiStepForm(rest);
	return <MultiStepFormUI {...formOptions}>{children}</MultiStepFormUI>;
};
