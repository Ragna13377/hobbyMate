import React, { PropsWithChildren } from 'react';
import { cn } from '@shared/lib/tailwind';
import { Button } from '@shared/ui/Button';
import { Card, CardContent, CardFooter, CardHeader } from '@shared/ui/Card';
import { Progress } from '@shared/ui/Progress';
import { calculateProgress } from '@shared/utils/calculationUtils';

export type FormStepProps = PropsWithChildren & {
	step: number;
	stepCount: number;
	handleNextStep: () => void;
	handleBackStep: () => void;
	buttonNextText?: string | null;
	stepDescription?: string | null;
};

export const formProgressShift = 10;

const FormStep = ({
	step,
	stepCount,
	buttonNextText,
	stepDescription,
	handleNextStep,
	handleBackStep,
	children,
}: FormStepProps) => (
	<>
		<Card className='bg-transparent border-0 text-foreground'>
			<CardHeader className={cn('p-0', step > 0 && 'pb-5')}>
				{step > 0 && (
					<Progress className='h-1' value={calculateProgress(step, stepCount, formProgressShift)} />
				)}
				{stepDescription && <p className='text-accent text-center'>{stepDescription}</p>}
			</CardHeader>
			<CardContent className='flex flex-col p-0 mb-5 gap-5'>{children}</CardContent>
			<CardFooter className='flex-row-reverse justify-between p-0'>
				<Button
					onClick={handleNextStep}
					type={step === stepCount - 1 ? 'submit' : 'button'}
					className={cn(step === 0 ? 'w-full' : 'w-1/3')}
				>
					{buttonNextText ?? 'Continue'}
				</Button>
				{step > 0 && (
					<Button onClick={handleBackStep} type='button' className='w-1/3'>
						Back
					</Button>
				)}
			</CardFooter>
		</Card>
	</>
);

export default FormStep;
