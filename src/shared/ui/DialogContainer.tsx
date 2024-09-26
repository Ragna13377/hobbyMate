import React, { PropsWithChildren } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@shared/ui/Dialog';
import { Button, buttonVariants } from '@shared/ui/Button';
import type { VariantProps } from 'class-variance-authority';

export type DialogShellProps = PropsWithChildren & {
	trigger: VariantProps<typeof buttonVariants> & {
		text: string;
	};
};

const DialogContainer = ({ trigger: { text, variant, size }, children }: DialogShellProps) => (
	<Dialog>
		<DialogTrigger asChild>
			<Button variant={variant || 'default'} size={size || 'default'}>
				{text}
			</Button>
		</DialogTrigger>
		<DialogContent>
			<DialogHeader className='gap-3'>
				<DialogTitle>Start your journey!</DialogTitle>
				<DialogDescription />
			</DialogHeader>
			{children}
		</DialogContent>
	</Dialog>
);

export default DialogContainer;
