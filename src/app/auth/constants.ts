export const providers = {
	github: {
		clientId: process.env.NEXT_PUBLIC_AUTH_GITHUB_ID,
		clientSecret: process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRET,
	},
	google: {
		clientId: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID,
		clientSecret: process.env.NEXT_PUBLIC_AUTH_GOOGLE_SECRET,
	},
};
