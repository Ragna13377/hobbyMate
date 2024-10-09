'use client';
import React from 'react';
import { Form, FormField } from '@shared/ui/Form';
import { Separator } from '@shared/ui/Separator';
import AuthStep from '@features/auth/components/AuthStep';
import AuthField from '@features/auth/components/AuthField';
import { Oauth } from '@features/auth/components/Oauth';
import { buttonTexts, inputFields, stepDescriptions } from './constants';
import { FetchFunctionMap } from './types';
import { AuthSchemaProps } from './shema';
import { getCityByQuery, getCountryByQuery, getHobby } from './api';
import { useAuthForm } from './hooks/useAuthForm';
import { useStepNavigation } from './hooks/useStepNavigation';
import { getErrorMessage } from '@features/auth/components/AuthForm/utils';

const AuthForm = () => {
	const { form, onSubmitForm } = useAuthForm();
	const { step, stepCount, stepInputs, ...handlers } = useStepNavigation(form, inputFields);
	const {
		control,
		formState: { errors },
		getValues,
	} = form;
	const fetchFunctions: FetchFunctionMap<AuthSchemaProps> = {
		country: getCountryByQuery,
		city: getCityByQuery(getValues('country')),
		hobbies: getHobby,
	};
	return (
		<Form {...form}>
			<form onSubmit={onSubmitForm}>
				<div className='flex flex-col gap-5'>
					<AuthStep
						key={step}
						step={step}
						stepCount={stepCount}
						buttonNextText={buttonTexts[step]}
						stepDescription={stepDescriptions[step]}
						{...handlers}
					>
						{stepInputs.map(({ name, ...rest }) => (
							<FormField
								key={name}
								name={name}
								control={control}
								render={({ field }) => (
									<AuthField<AuthSchemaProps>
										name={name}
										field={field}
										errorMessage={getErrorMessage(errors[field.name])}
										fetchData={fetchFunctions[name]}
										{...rest}
									/>
								)}
							/>
						))}
					</AuthStep>
					{step === 0 && (
						<>
							<Separator>Or</Separator>
							<Oauth />
						</>
					)}
				</div>
			</form>
		</Form>
	);
};

export default AuthForm;
