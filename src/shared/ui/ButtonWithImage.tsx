import React from 'react';
import Image from 'next/image';
import { Button, ButtonProps } from '@shared/ui/Button';
import { cn } from '@shared/lib/tailwind';

export type ButtonWithImageProps = ButtonProps & {
	image: string;
	imageSize: number;
	alt?: string;
};

const ButtonWithImage = ({
	image,
	imageSize,
	alt,
	type,
	variant,
	size,
	className,
	onClick,
	children,
	...rest
}: ButtonWithImageProps) => (
	<Button
		className={cn('relative group', className)}
		variant={variant}
		size={size}
		type={type ?? 'button'}
		onClick={onClick}
		{...rest}
	>
		<Image
			src={image}
			width={imageSize}
			height={imageSize}
			alt={alt ?? ''}
			className={`absolute top-1/2 left-0 translate-x-full -translate-y-1/2 w-[${size}px] aspect-square z-10 grayscale group-hover:grayscale-0 group-active:grayscale-0 transition duration-500`}
		/>
		{children}
	</Button>
);

export default ButtonWithImage;
