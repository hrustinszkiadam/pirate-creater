import type { Config } from 'tailwindcss';
import scrollbar from 'tailwind-scrollbar';

export default {
	content: ['./index.html', './src/**.{ts,tsx}', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				pirate: "url('/images/bg.jpg')",
				'pirate-card': "url('/images/pirate-card-bg.png')",
			},
			colors: {
				input: {
					bg: '#e0ccbc',
				},
			},
		},
	},
	plugins: [scrollbar({ nocompatible: true })],
} satisfies Config;
