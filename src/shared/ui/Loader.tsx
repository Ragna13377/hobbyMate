import React from 'react';
import { cn } from '@shared/lib/tailwind';
import { cva, type VariantProps } from 'class-variance-authority';

const loaderVariants = cva('', {
	variants: {
		variant: {
			button:
				'inline-block rounded-full border-t-[3px] border-t-white border-r-[3px] border-r-transparent animate-loader-rotation w-7 h-7',
			block:
				'w-min text-center text-4xl before:inline-block before:content-["Loading"] before:animate-loader-floating after-content-[""] after:absolute after:w-full after:h-2.5 after:left-0 after:top-full after:rounded-full after:bg-black after:bg-opacity-15 after:blur-sm after:animate-loader-shadow',
		},
	},
});

export interface LoaderProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof loaderVariants> {}

const Loader = ({ variant = 'button', className, ...props }: LoaderProps) => (
	<div className={cn(loaderVariants({ variant, className }))} {...props} />
);

export default Loader;
