import svgrConfig from './config/images.config.js';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		return svgrConfig(config);
	},
	images: {
		deviceSizes: [1280, 1920, 3840]
	}
};

// export default nextConfig;
export default withNextIntl(nextConfig);