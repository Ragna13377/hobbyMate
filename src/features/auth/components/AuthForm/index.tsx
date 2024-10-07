'use client';
import React from 'react';
import Link from 'next/link';
import { authProgressShift, buttonLabels, inputFields, stepDescriptions } from './constants';
import { calculateProgress } from '@shared/utils/calculationUtils';
import { Separator } from '@shared/ui/Separator';
import { Progress } from '@shared/ui/Progress';
import { Form } from '@shared/ui/Form';
import { Oauth } from '@features/auth/components/Oauth';
import AuthStep from '@features/auth/components/AuthStep';
import AuthField from '@features/auth/components/AuthField';
import { FetchFunctionMap } from './types';
import { AuthSchemaProps } from './shema';
import { getCityByQuery, getCountryByQuery, getHobby } from './api';
import { useAuthForm } from './hooks/useAuthForm';

const AuthForm = () => {
	const { form, onSubmitForm, stepIndex, stepCount, ...handlers } = useAuthForm(inputFields);
	const fetchFunctions: FetchFunctionMap<AuthSchemaProps> = {
		country: getCountryByQuery,
		city: getCityByQuery(form.getValues('country')),
		hobbies: getHobby,
	};
	return (
		<Form {...form}>
			<form onSubmit={onSubmitForm}>
				{stepIndex > 0 && (
					<Progress
						className='h-1'
						value={calculateProgress(stepIndex, stepCount, authProgressShift)}
					/>
				)}
				<p className='text-accent my-3 text-center'>{stepDescriptions[stepIndex]}</p>
				<div className='flex flex-col gap-5'>
					<AuthStep
						key={stepIndex}
						buttonText={buttonLabels[stepIndex]}
						stepIndex={stepIndex}
						stepCount={stepCount}
						{...handlers}
					>
						{inputFields[stepIndex].map((i) => (
							<AuthField<AuthSchemaProps>
								key={i.name}
								control={form.control}
								errors={form.formState.errors}
								fetchData={fetchFunctions[i.name]}
								{...i}
							/>
						))}
					</AuthStep>
					{stepIndex === 0 && (
						<>
							<Separator>Or</Separator>
							<Oauth />
							<small className='text-muted text-xs text-center'>
								Click “Sign in” to agree to{' '}
								<Link href='/terms-of-service' className='underline-default'>
									Terms of Service
								</Link>{' '}
								and acknowledge that{' '}
								<Link href='/privacy-policy' className='underline-default'>
									Privacy Policy
								</Link>{' '}
								applies to you.
							</small>
						</>
					)}
				</div>
			</form>
		</Form>
	);
};

export default AuthForm;
