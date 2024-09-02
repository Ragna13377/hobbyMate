import React from 'react';
import Image from 'next/image';
import { OauthButtonUIProps } from '@entities/OauthDialog/components/OauthButton/types';
import { Button } from '@shared/ui/Button';
import style from '@entities/OauthDialog/components/OauthAuthorization/style.module.scss';

const OauthButtonUI = ({ image, size, alt, onClick, children }: OauthButtonUIProps) => (
	<Button
		className={style.socialButton}
		variant={'default'}
		size={'default'}
		type='button'
		onClick={onClick}
	>
		<Image src={image} width={size} height={size} alt={alt ?? ''} className={style.socialIcon} />
		{children}
	</Button>
);

export default OauthButtonUI;
