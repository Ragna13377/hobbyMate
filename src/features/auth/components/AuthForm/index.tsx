'use client';
import React from 'react';
import { toTitleCase } from '@shared/utils/stringUtils';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@shared/ui/Form';
import { Input } from '@shared/ui/Input';
import { Separator } from '@shared/ui/Separator';
import FormStep from '@shared/ui/FormStep';
import AutocompleteField from '@entities/Autocomplete/components/AutocompleteField';
import { Oauth } from '@features/auth/components/Oauth';
import { buttonTexts, inputFields, stepDescriptions } from './constants';
import { FetchFunctionMap } from './types';
import { AuthSchemaProps } from './shema';
import { getCityByQuery, getCountryByQuery, getHobby } from './api';
import { getErrorMessage } from './utils';
import { useAuthForm } from './hooks/useAuthForm';
import { useStepNavigation } from './hooks/useStepNavigation';

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
					<FormStep
						key={step}
						step={step}
						stepCount={stepCount}
						buttonNextText={buttonTexts[step]}
						stepDescription={stepDescriptions[step]}
						{...handlers}
					>
						{stepInputs.map(({ name, placeholder, hasBadges, isCommandAutocomplete, ...rest }) => {
							const errorMessage = getErrorMessage(errors[name]);
							const currentFetchFunction = fetchFunctions[name];
							return (
								<FormField
									key={name}
									name={name}
									control={control}
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-base'>{errorMessage ? errorMessage : toTitleCase(name)}</FormLabel>
											<FormControl>
												{isCommandAutocomplete && currentFetchFunction ? (
													<AutocompleteField
														hasBadges={hasBadges}
														name={name}
														placeholder={placeholder}
														fetchData={currentFetchFunction}
														field={field}
													/>
												) : <Input placeholder={placeholder} {...rest} {...field} />}
											</FormControl>
										</FormItem>
									)}
								/>
							)
						})}
					</FormStep>
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
