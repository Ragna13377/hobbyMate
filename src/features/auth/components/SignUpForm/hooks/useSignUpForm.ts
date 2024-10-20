import { useState } from 'react';
import { SignUpSchemaResponse } from '@features/auth/components/SignUpForm/schema';
import { registerUser } from '@features/auth/components/SignUpForm/actions';
import { handleCredentialSignIn } from '@features/auth/utils/authUtils';

export const useSignUpForm = (stepCount: number) => {
	const [currentStep, setCurrentStep] = useState(0);
	const handleNextStep = () => setCurrentStep((s) => Math.min(s + 1, stepCount - 1));
	const handleBackStep = () => setCurrentStep((s) => Math.max(s - 1, 0));
	const handleSubmit = async (formData: SignUpSchemaResponse) => {
		const user = await registerUser(formData);
		if (!user) throw new Error('User not created');
		const res = await handleCredentialSignIn({
			username: formData.username,
			password: formData.password,
		});
		if (!res || !res.ok) throw new Error('Sign in failed');
	};
	return {
		currentStep,
		handleNextStep,
		handleBackStep,
		handleSubmit,
	};
};
