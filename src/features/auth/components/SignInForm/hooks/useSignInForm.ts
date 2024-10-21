import { handleCredentialSignIn } from '@features/auth/utils/authUtils';
import { SignInSchemaResponse } from '../schema';

export const useSignInForm = () => {
	const handleSubmit = async (formData: SignInSchemaResponse) => {
		await handleCredentialSignIn({
			...formData,
		});
	};
	return {
		handleSubmit,
	};
};
