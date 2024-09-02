import { PropsWithChildren } from 'react';
import { TProvider } from '@app/auth/types';

export type OauthButtonProps = PropsWithChildren & {
	image: string;
	size: number;
	provider: TProvider;
	alt?: string;
};
export type OauthButtonUIProps = Omit<OauthButtonProps, 'provider'> & {
	onClick: () => void;
};
