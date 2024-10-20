import { z, ZodSchema } from 'zod';
import { FieldValues, Path, UseFormProps, UseFormReturn } from 'react-hook-form';
import { THTMLInputType } from '@shared/types';
import { BaseSyntheticEvent } from 'react';

export type TFormField<T extends FieldValues> = {
	name: Path<T>;
	type?: THTMLInputType;
	placeholder?: string;
	htmlAutoComplete?: string;
	autocompleteOptions?: {
		hasBadges?: boolean;
	};
};
export type TFormStep<T extends FieldValues> = TFormField<T>[];

export type TFormSchemaResponse<TSchema extends ZodSchema> = z.infer<TSchema>;
export type MultiStepFormProps<TSchema extends ZodSchema> = {
	config: UseFormProps<TFormSchemaResponse<TSchema>>;
	submitHandler?: (formData: TFormSchemaResponse<TSchema>) => Promise<void>;
	errorHandler?: () => void;
};

export type MultiStepFormUIProps<TSchema extends ZodSchema> = {
	form: UseFormReturn<TFormSchemaResponse<TSchema>, undefined, undefined>;
	onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
	isLoading: boolean;
};
