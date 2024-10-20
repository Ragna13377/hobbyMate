import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@shared/lib/tailwind';

const buttonVariants = cva(
	'text-foreground rounded-md disabled:pointer-events-none disabled:opacity-50 transition-opacity duration-200 ease-in-out hover:brightness-125 active:brightness-90',
	{
		variants: {
			variant: {
				default: 'bg-primary',
				badge:
					'relative text-accent text-sm bg-transparent after:content-["x"] after:absolute after:inset-x-0 after:-top-1/4 transition-colors duration-200 ease-out group-hover:text-accent-foreground hover:bg-accent-foreground hover:after:text-accent',
				destructive: '',
				outline: '',
				secondary: '',
				ghost: '',
				link: '',
			},
			size: {
				default: 'p-3',
				badge: 'h-4 w-4',
				sm: 'p-1 text-xs',
				lg: '',
				icon: '',
				clear: '',
			},
			defaultVariants: {
				variant: 'default',
				size: 'default',
			},
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...(variant === 'badge' ? { tabIndex: -1 } : {})}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
