'use client';
import React from 'react';
import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import { toTitleCase } from '@shared/utils/stringUtils';
import { Input } from '@shared/ui/Input';
import { FormControl, FormItem, FormLabel } from '@shared/ui/Form';
import { AutocompleteInput } from '@entities/AutocompleteSearch';
import { TAuthField } from '@features/auth/components/types';
import { BadgeProvider } from '@shared/providers/BadgeProvider';

export type AuthFieldProps<T extends FieldValues> = TAuthField & {
	errorMessage?: string;
	field: ControllerRenderProps<T, Path<T>>;
	fetchData?: (query: string) => Promise<string[]>;
};

const AuthField = <T extends FieldValues>({
	name,
	type,
	placeholder = '',
	autoComplete = 'off',
	isCommandAutocomplete,
	fetchData,
	hasBadges,
	errorMessage,
	field,
}: AuthFieldProps<T>) => (
	<FormItem>
		<FormLabel className='text-base'>{errorMessage ? errorMessage : toTitleCase(name)}</FormLabel>
		<FormControl>
			{isCommandAutocomplete && fetchData ? (
				hasBadges ? (
					<BadgeProvider defaultValues={field.value}>
						<AutocompleteInput
							name={name}
							placeholder={placeholder}
							fetchData={fetchData}
							ref={field.ref}
							formBlur={field.onBlur}
							formChange={field.onChange}
						/>
					</BadgeProvider>
				) : (
					<AutocompleteInput
						name={name}
						placeholder={placeholder}
						fetchData={fetchData}
						ref={field.ref}
						initialValue={field.value}
						formBlur={field.onBlur}
						formChange={field.onChange}
					/>
				)
			) : (
				<Input type={type} placeholder={placeholder} autoComplete={autoComplete} {...field} />
			)}
		</FormControl>
	</FormItem>
);

export default AuthField;
