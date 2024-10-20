import { SignUpSchemaResponse } from '@features/auth/components/SignUpForm/schema';
import { handleCredentialSignIn } from '@features/auth/utils/authUtils';

export const useSignInForm = () => {
	const handleSubmit = async (formData: SignUpSchemaResponse) => {
		const res = await handleCredentialSignIn({
			username: formData.username,
			password: formData.password,
		});
		if (!res || !res.ok) throw new Error('Sign in failed');
	};
	return {
		handleSubmit,
	};
};
