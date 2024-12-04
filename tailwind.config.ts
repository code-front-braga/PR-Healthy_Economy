import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				snow: '#fffafa',
				greenSpring: '#1affaf',
				blackPearl: '#000b0d',
				greenCyprus: '#154b52',
				safetyOrange: '#ff6200',
				input: '#404748',
			},
			fontFamily: {
				alumni: '"Alumni Sans", sans-serif',
				lovedBKing: '"Loved by the King", cursive',
				loveYLSister: '"Love Ya Like A Sister", cursive',
			},
			screens: {
				mobile360px: '360px',
				mobile414px: '414px',
				mobile480px: '480px',
				mobile560px: '560px',
				mobile600px: '600px',
				mobile640px: '640px',
			},
		},
	},
	plugins: [],
} satisfies Config;
