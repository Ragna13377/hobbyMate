import { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@shared/ui/Button';

export type DialogContainerProps = PropsWithChildren<{
	title: string;
	trigger: VariantProps<typeof buttonVariants> & {
		text: string;
	};
}>;

export type DialogContainerUIProps = DialogContainerProps & {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
};
