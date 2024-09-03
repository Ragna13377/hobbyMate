import { ButtonProps } from '@shared/ui/Button';

export type OauthButtonProps = ButtonProps & {
	image: string;
	imageSize: number;
	alt?: string;
};
