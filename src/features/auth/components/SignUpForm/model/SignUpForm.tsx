'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Separator } from '@shared/ui/Separator';
import { MultiStepForm } from '@entities/MultiStepForm';
import { FormStep } from '@entities/MultiStepForm/components/FormStep';
import MultiStepFormField from 'src/entities/MultiStepForm/components/MultiStepFormField';
import { Oauth } from '@features/auth/components/Oauth';
import {
	signUpFormInitialValues,
	signUpStepButtons,
	signUpStepDescriptions,
	signUpStepFields,
} from '../constants';
import { getCityByQuery, getCountryByQuery, getHobby } from '../api';
import { signUpSchema, SignUpSchemaResponse } from '../schema';
import { useSignUpForm } from '../hooks/useSignUpForm';
import { FetchFunctionMap } from '../types';

export const SignUpForm = () => {
	const { currentStep, handleNextStep, handleBackStep, handleSubmit } = useSignUpForm(
		signUpStepFields.length
	);
	const fetchFunctions: FetchFunctionMap<SignUpSchemaResponse> = {
		country: getCountryByQuery,
		city: getCityByQuery,
		hobbies: getHobby,
	};
	return (
		<MultiStepForm
			config={{
				defaultValues: {
					...signUpFormInitialValues,
					city: sessionStorage.getItem('city') ?? '',
					country: sessionStorage.getItem('country') ?? '',
				},
				reValidateMode: 'onSubmit',
				resolver: zodResolver(signUpSchema),
			}}
			submitHandler={handleSubmit}
		>
			<FormStep
				key={currentStep}
				currentStep={currentStep}
				stepCount={signUpStepFields.length}
				handleNextStep={handleNextStep}
				handleBackStep={handleBackStep}
				stepInputs={signUpStepFields[currentStep]}
				description={signUpStepDescriptions[currentStep]}
				nextButtonText={signUpStepButtons[currentStep]}
			>
				{signUpStepFields[currentStep].map((f) => (
					<MultiStepFormField key={f.name} searchFunction={fetchFunctions[f.name]} {...f} />
				))}
			</FormStep>
			{currentStep === 0 && (
				<>
					<Separator>Or</Separator>
					<Oauth />
				</>
			)}
		</MultiStepForm>
	);
};
