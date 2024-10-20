import React from 'react';
import { cn } from '@shared/lib/tailwind';
import { Button } from '@shared/ui/Button';
import { Card, CardContent, CardFooter, CardHeader } from '@shared/ui/Card';
import { Progress } from '@shared/ui/Progress';
import { FormStepUIProps } from '@entities/MultiStepForm/components/FormStep/types';

const FormStepUi = ({
	currentStep,
	stepCount,
	description,
	nextButtonText,
	progressValue,
	handleNextStep,
	handleBackStep,
	children,
}: FormStepUIProps) => (
	<Card className='w-full flex flex-col h-full bg-transparent border-0 text-foreground'>
		<CardHeader className={cn('p-0', description && 'pb-5')}>
			{stepCount > 1 && currentStep > 0 && <Progress className='h-1' value={progressValue} />}
			{description && <p className='text-accent text-center'>{description}</p>}
		</CardHeader>
		<CardContent className='flex flex-col p-0 mb-5 gap-5'>{children}</CardContent>
		<CardFooter className='flex-row-reverse justify-between p-0 mt-auto'>
			<Button
				onClick={handleNextStep}
				type={currentStep === stepCount - 1 ? 'submit' : 'button'}
				className={cn(currentStep === 0 ? 'w-full' : 'w-1/3')}
			>
				{nextButtonText ?? 'Continue'}
			</Button>
			{currentStep > 0 && (
				<Button onClick={handleBackStep} type='button' className='w-1/3'>
					Back
				</Button>
			)}
		</CardFooter>
	</Card>
);

export default FormStepUi;
