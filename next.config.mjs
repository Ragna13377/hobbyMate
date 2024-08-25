import svgrConfig from './config/images.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		return svgrConfig(config);
	},
	images: {
		deviceSizes: [1280, 1920, 3840]
	}
};

export default nextConfig;
