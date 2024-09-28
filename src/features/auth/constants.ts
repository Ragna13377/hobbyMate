export const providers = {
	github: {
		clientId: process.env.NEXT_PUBLIC_AUTH_GITHUB_ID!,
		clientSecret: process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRET!,
	},
	google: {
		clientId: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID!,
		clientSecret: process.env.NEXT_PUBLIC_AUTH_GOOGLE_SECRET!,
	},
};

export const locationByIpServiceUrl = 'https://api.ipgeolocation.io/ipgeo';
export const locationByIpServiceParams = {
	apiKey: process.env.NEXT_PUBLIC_IPGEOLOCATION_KEY!,
};

export const locationByQueryServiceUrl = 'https://api.geoapify.com/v1/geocode/search';
export const locationByQueryServiceParams = {
	apiKey: process.env.NEXT_PUBLIC_GEOAPIFY_KEY!,
};
