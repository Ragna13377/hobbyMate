'use client';
import React from 'react';
import { Control, DeepRequired, FieldErrorsImpl, FieldValues, GlobalError } from 'react-hook-form';
import { toTitleCase } from '@shared/utils/stringUtils';
import { Input } from '@shared/ui/Input';
import { FormControl, FormField, FormItem, FormLabel } from '@shared/ui/Form';
import { AutocompleteInput } from '@entities/AutocompleteSearch';
import { TAuthField } from '@features/auth/components/types';
import { AuthSchemaProps } from '@features/auth/components/AuthForm/shema';

export type AuthFieldProps<T extends FieldValues> = TAuthField<T> & {
	errors: Partial<FieldErrorsImpl<DeepRequired<T>>> & {
		root?: Record<string, GlobalError> & GlobalError;
	};
	control: Control<T, unknown>;
};
const AuthField = <T extends FieldValues>({
	name,
	type,
	placeholder,
	autoComplete,
	errors,
	control,
	isCommandAutocomplete,
	fetchData,
}: AuthFieldProps<T>) => (
	<FormField
		control={control}
		name={name}
		render={({ field }) => (
			<FormItem>
				<FormLabel className='text-base'>
					{typeof errors[name]?.message === 'string' ? errors[name]?.message : toTitleCase(name)}
				</FormLabel>
				<FormControl>
					{isCommandAutocomplete && fetchData ? (
						<AutocompleteInput
							name={name}
							placeholder={placeholder ?? toTitleCase(name)}
							initialValue={field.value}
							formBlur={field.onBlur}
							formChange={field.onChange}
							fetchData={fetchData}
						/>
					) : (
						<Input
							type={type}
							placeholder={placeholder ?? toTitleCase(name)}
							autoComplete={autoComplete || 'off'}
							{...field}
						/>
					)}
				</FormControl>
			</FormItem>
		)}
	/>
);

export default AuthField;
