import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/src/shared/lib/tailwind';
import { Button } from '@shared/ui/Button';

const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none',
	{
		variants: {
			variant: {
				default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
				secondary:
					'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive:
					'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
				outline: 'text-foreground',
				interactive:
					'group bg-primary text-accent transition-colors duration-200 ease-out hover:bg-accent hover:text-accent-foreground',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof badgeVariants> & {
		onClick?: () => void;
	};

function Badge({ className, variant, onClick, children, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props}>
			{children}
			{onClick && <Button variant='badge' size='badge' onClick={onClick} className='ml-1' />}
		</div>
	);
}

export { Badge, badgeVariants };