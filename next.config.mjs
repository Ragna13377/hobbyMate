import svgrConfig from './src/app/config/images.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		return svgrConfig(config);
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [1280, 1920, 3840]
	}
};

export default nextConfig;