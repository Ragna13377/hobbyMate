'use client';
import React from 'react';
import Link from 'next/link';
import { authFormSteps, authProgressShift } from './constants';
import { useAuthForm } from './hooks/useAuthForm';
import { Separator } from '@shared/ui/Separator';
import { Form } from '@shared/ui/Form';
import { Oauth } from '@features/auth/components/Oauth';
import AuthStep from '@features/auth/components/AuthStep';
import AuthField from '@features/auth/components/AuthField';
import { getCityByQuery, getCountryByQuery } from '@features/auth/components/AuthForm/api';
import { Progress } from '@shared/ui/Progress';
import { calculateProgress } from '@shared/utils/calculationUtils';
import { AuthSchemaProps } from '@features/auth/components/AuthForm/shema';

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
				{stepIndex > 0 && (
					<Progress
						className='h-1'
						value={calculateProgress(stepIndex, authFormSteps.length, authProgressShift)}
					/>
				)}
				<p className='text-accent my-3 text-center'>{description}</p>
				<div className='flex flex-col gap-5'>
					<AuthStep
						buttonText={buttonText}
						stepIndex={stepIndex}
						stepCount={authFormSteps.length}
						{...handlers}
					>
						{inputFields.map((i) => (
							<AuthField<AuthSchemaProps>
								key={i.name}
								control={form.control}
								errors={form.formState.errors}
								fetchData={
									i.name === 'country'
										? getCountryByQuery
										: getCityByQuery(form.getValues('country'))
								}
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
