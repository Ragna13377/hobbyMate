import React, { PropsWithChildren } from 'react';
import { cn } from '@shared/lib/tailwind';
import { Button } from '@shared/ui/Button';
import { Card, CardContent, CardFooter } from '@shared/ui/Card';

export type AuthStepProps = PropsWithChildren & {
	stepCount: number;
	stepIndex: number;
	handleBackStep: () => void;
	handleNextStep: () => void;
	buttonText?: string;
};
const AuthStep = ({
	buttonText,
	stepCount,
	stepIndex,
	handleBackStep,
	handleNextStep,
	children,
}: AuthStepProps) => (
	<>
		<Card className='bg-transparent border-0 text-foreground'>
			<CardContent className='flex flex-col p-0 mb-5 gap-5'>{children}</CardContent>
			<CardFooter className='flex-row-reverse justify-between p-0'>
				<Button
					onClick={handleNextStep}
					type={stepIndex < stepCount ? 'button' : 'submit'}
					className={cn(stepIndex === 0 ? 'w-full' : 'w-1/3')}
				>
					{buttonText ?? 'Continue'}
				</Button>
				{stepIndex > 0 && (
					<Button onClick={handleBackStep} type='button' className='w-1/3'>
						Back
					</Button>
				)}
			</CardFooter>
		</Card>
	</>
);

export default AuthStep;
