import React, { PropsWithChildren } from 'react';
import { cn } from '@shared/lib/tailwind';
import { Button } from '@shared/ui/Button';

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
		{children}
		<div className='flex flex-row-reverse justify-between align-middle'>
			<Button
				onClick={handleNextStep}
				type={stepIndex < stepCount ? 'button' : 'submit'}
				className={cn(stepIndex === 0 ? 'w-full' : 'w-1/4')}
			>
				{buttonText ?? 'Continue'}
			</Button>
			{stepIndex > 0 && (
				<Button onClick={handleBackStep} type='button' className='w-1/4'>
					Back
				</Button>
			)}
		</div>
	</>
);

export default AuthStep;
