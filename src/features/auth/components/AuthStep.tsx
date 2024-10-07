import React, { PropsWithChildren } from 'react';
import { cn } from '@shared/lib/tailwind';
import { Button } from '@shared/ui/Button';
import { Card, CardContent, CardFooter } from '@shared/ui/Card';
import { DialogClose } from '@shared/ui/Dialog';

export type AuthStepProps = PropsWithChildren & {
	stepCount: number;
	stepIndex: number;
	handleBackStep: () => void;
	handleNextStep: () => void;
	buttonText?: string;
};
const AuthStep = ({
	buttonText = 'Continue',
	stepCount,
	stepIndex,
	handleBackStep,
	handleNextStep,
	children,
}: AuthStepProps) => {
	const ButtonElement = (
		<Button
			onClick={handleNextStep}
			type={stepIndex === stepCount - 1 ? 'submit' : 'button'}
			className={cn(stepIndex === 0 ? 'w-full' : 'w-1/3')}
		>
			{buttonText}
		</Button>
	);
	return (
		<>
			<Card className='bg-transparent border-0 text-foreground'>
				<CardContent className='flex flex-col p-0 mb-5 gap-5'>{children}</CardContent>
				<CardFooter className='flex-row-reverse justify-between p-0'>
					{stepIndex === stepCount - 1 ? (
						<DialogClose asChild>{ButtonElement}</DialogClose>
					) : (
						ButtonElement
					)}
					{stepIndex > 0 && (
						<Button onClick={handleBackStep} type='button' className='w-1/3'>
							Back
						</Button>
					)}
				</CardFooter>
			</Card>
		</>
	);
};

export default AuthStep;
