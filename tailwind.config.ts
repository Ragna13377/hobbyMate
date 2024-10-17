import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
		screens: {
			desktop: '1440px',
		},
		extend: {
			margin: {
				'1/3': 'calc(100% / 3)',
			},
			brightness: {
				70: '0.7',
				80: '0.8',
			},
			blur: {
				1: '1px',
			},
			grayscale: {
				40: '40%',
			},
			colors: {
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)',
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)',
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)',
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)',
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)',
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)',
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)',
				},
			},
			boxShadow: {
				default: '0 0 5px 0 var(--foreground-color)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'loader-floating': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-25px)' },
				},
				'loader-shadow': {
					'0%': { transform: 'scale(0.8)' },
					'100%': { transform: 'scale(1.2)' },
				},
				'loader-rotation': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'loader-floating': 'loader-floating 1s ease-out infinite alternate',
				'loader-shadow': 'loader-shadow 1s ease-out infinite alternate',
				'loader-rotation': 'loader-rotation 1s linear infinite',
			},
		},
	},
	plugins: [tailwindcssAnimate],
} as Config;

export default config;
