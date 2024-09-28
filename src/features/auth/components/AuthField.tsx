import React from 'react';
import { Control, DeepRequired, FieldErrorsImpl, GlobalError } from 'react-hook-form';
import { toTitleCase } from '@shared/utils/stringUtils';
import { Input } from '@shared/ui/Input';
import { FormControl, FormField, FormItem, FormLabel } from '@shared/ui/Form';
import { AutocompleteInput } from '@entities/AutocompleteSearch';
import { TAuthField } from '@features/auth/components/AuthForm/types';
import { AuthSchemaProps } from '@features/auth/components/AuthForm/shema';
import { getCityByQuery, getCountryByQuery } from '@features/auth/components/AuthForm/utils';

export type FieldProps = TAuthField & {
	errors: Partial<FieldErrorsImpl<DeepRequired<AuthSchemaProps>>> & {
		root?: Record<string, GlobalError> & GlobalError;
	};
	control: Control<AuthSchemaProps, unknown>;
};
const AuthField = ({
	name,
	type,
	placeholder,
	isCommandAutocomplete,
	autoComplete,
	errors,
	control,
}: FieldProps) => (
	<FormField
		control={control}
		name={name}
		render={({ field }) => (
			<FormItem>
				<FormLabel className='text-base'>
					{errors[name]?.message ? errors[name]?.message : toTitleCase(name)}
				</FormLabel>
				<FormControl>
					{isCommandAutocomplete ? (
						<AutocompleteInput<AuthSchemaProps>
							name={name}
							placeholder={placeholder ?? toTitleCase(name)}
							initialValue={field.value}
							formBlur={field.onBlur}
							formChange={field.onChange}
							fetchData={getCountryByQuery}
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
