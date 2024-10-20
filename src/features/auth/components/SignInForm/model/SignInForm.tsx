'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { MultiStepForm } from '@entities/MultiStepForm';
import MultiStepFormField from '@entities/MultiStepForm/components/MultiStepFormField';
import { signInFormInitialValues, signInStepFields } from '../constants';
import { signInSchema } from '../schema';
import { useSignInForm } from '../hooks/useSignInForm';
import { FormStep } from '@entities/MultiStepForm/components/FormStep';
import { Separator } from '@shared/ui/Separator';
import { Oauth } from '@features/auth/components/Oauth';

export const SignInForm = () => {
	const { handleSubmit } = useSignInForm();
	return (
		<MultiStepForm
			config={{
				defaultValues: {
					...signInFormInitialValues,
				},
				reValidateMode: 'onSubmit',
				resolver: zodResolver(signInSchema),
			}}
			submitHandler={handleSubmit}
		>
			<FormStep
				currentStep={0}
				stepCount={signInStepFields.length}
				stepInputs={signInStepFields[0]}
				description='No account yet? Create an account to join us.'
				nextButtonText='Sign in'
			>
				{signInStepFields[0].map((f) => (
					<MultiStepFormField key={f.name} {...f} />
				))}
			</FormStep>
			<Separator>Or</Separator>
			<Oauth />
		</MultiStepForm>
	);
};
