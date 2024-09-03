import { clsx } from 'clsx';
import React from 'react';
import Image from 'next/image';
import { OauthButtonProps } from '@shared/ui/ButtonWithImage/types';
import { Button } from '@shared/ui/Button';
import style from './style.module.scss';

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
}: OauthButtonProps) => (
	<Button
		className={clsx(style.socialButton, className)}
		variant={variant ?? 'default'}
		size={size ?? 'default'}
		type={type ?? 'button'}
		onClick={onClick}
		{...rest}
	>
		<Image
			src={image}
			width={imageSize}
			height={imageSize}
			alt={alt ?? ''}
			className={style.socialIcon}
		/>
		{children}
	</Button>
);

export default ButtonWithImage;
