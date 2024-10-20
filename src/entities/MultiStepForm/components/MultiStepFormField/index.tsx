'use client';
import React from 'react';
import { FormControl, FormField, FormItem, FormLabel } from '@shared/ui/Form';
import { getErrorMessage } from '@shared/utils/errorsUtils';
import { toTitleCase } from '@shared/utils/stringUtils';
import AutocompleteField from '@entities/Autocomplete/components/AutocompleteField';
import { Input } from '@shared/ui/Input';
import { TFormField } from '@entities/MultiStepForm/types';
import { FieldValues, useFormContext } from 'react-hook-form';

export type MultiStepFormFieldProps<T extends FieldValues> = TFormField<T> & {
	searchFunction?: (query: string) => Promise<string[]>;
};

const MultiStepFormField = <T extends FieldValues>({
	name,
	type,
	placeholder,
	htmlAutoComplete,
	autocompleteOptions,
	searchFunction,
}: MultiStepFormFieldProps<T>) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();
	return (
		<FormField
			key={name}
			name={name}
			control={control}
			render={({ field }) => (
				<FormItem>
					<FormLabel className='text-base'>
						{getErrorMessage(errors[name]) || toTitleCase(name)}
					</FormLabel>
					<FormControl>
						{autocompleteOptions && searchFunction ? (
							<AutocompleteField
								name={name}
								placeholder={placeholder}
								fetchData={searchFunction}
								hasBadges={autocompleteOptions.hasBadges}
								field={field}
							/>
						) : (
							<Input
								placeholder={placeholder}
								autoComplete={htmlAutoComplete}
								type={type}
								{...field}
							/>
						)}
					</FormControl>
				</FormItem>
			)}
		/>
	);
};

export default MultiStepFormField;
