import React, { PropsWithChildren } from 'react';
import { Form } from '@shared/ui/Form';
import Loader from '@shared/ui/Loader';
import { MultiStepFormUIProps } from '../types';
import { ZodSchema } from 'zod';

const MultiStepFormUi = <TSchema extends ZodSchema>({
	form,
	onSubmit,
	isLoading,
	children,
}: PropsWithChildren<MultiStepFormUIProps<TSchema>>) => (
	<Form {...form}>
		<form onSubmit={onSubmit}>
			<div className='flex flex-col justify-center items-center gap-5 min-h-72 h-full'>
				{isLoading ? <Loader variant='block' /> : children}
			</div>
		</form>
	</Form>
);

export default MultiStepFormUi;
