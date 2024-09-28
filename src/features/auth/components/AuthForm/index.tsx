'use client';
import React from 'react';
import Link from 'next/link';
import { authFormSteps } from './constants';
import { useAuthForm } from './hooks/useAuthForm';
import { Separator } from '@shared/ui/Separator';
import { Form } from '@shared/ui/Form';
import { Oauth } from '@features/auth/components/Oauth';
import AuthStep from '@features/auth/components/AuthStep';
import AuthField from '@features/auth/components/AuthField';

const AuthForm = () => {
	const {
		form,
		onSubmitForm,
		currentStep: { inputFields, description, buttonText },
		stepIndex,
		...handlers
	} = useAuthForm(authFormSteps);
	return (
		<Form {...form}>
			<form onSubmit={onSubmitForm}>
				<p className='text-accent mb-3'>{description}</p>
				<div className='flex flex-col gap-5'>
					<AuthStep
						buttonText={buttonText}
						stepIndex={stepIndex}
						stepCount={authFormSteps.length}
						{...handlers}
					>
						{inputFields.map((i) => (
							<AuthField
								key={i.name}
								control={form.control}
								errors={form.formState.errors}
								{...i}
							/>
						))}
					</AuthStep>
					{stepIndex === 0 && (
						<>
							<Separator>Or</Separator>
							<Oauth />
							<p className='text-muted text-xs text-center'>
								Click “Sign in” to agree to{' '}
								<Link href='/terms-of-service' className='underline-default'>
									Terms of Service
								</Link>{' '}
								and acknowledge that{' '}
								<Link href='/privacy-policy' className='underline-default'>
									Privacy Policy
								</Link>{' '}
								applies to you.
							</p>
						</>
					)}
				</div>
			</form>
		</Form>
	);
};

export default AuthForm;
