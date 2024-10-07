'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@shared/lib/tailwind';
import { cva, type VariantProps } from 'class-variance-authority';

const SeparatorVariants = cva('relative shrink-0 bg-border', {
	variants: {
		variant: {
			default: 'bg-muted-foreground',
			primary: 'bg-primary',
		},
		size: {
			default: 'my-5 h-[2px]',
			small: 'my-5 h-[1px]',
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
});

export interface SeparatorProps
	extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
		VariantProps<typeof SeparatorVariants> {
	children?: React.ReactNode;
}

const Separator = React.forwardRef<
	React.ElementRef<typeof SeparatorPrimitive.Root>,
	SeparatorProps
>(
	(
		{
			children,
			className,
			variant = 'default',
			size = 'default',
			orientation = 'horizontal',
			decorative = true,
			...props
		},
		ref
	) => (
		<SeparatorPrimitive.Root
			ref={ref}
			decorative={decorative}
			orientation={orientation}
			className={cn(
				orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
				SeparatorVariants({ variant, size }),
				className
			)}
			{...props}
		>
			{typeof children === 'string' ? (
				<p className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm'>{children}</p>
			) : (
				children
			)}
		</SeparatorPrimitive.Root>
	)
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
