import type { Config } from 'tailwindcss';

const config = {
	content: [
		'./app/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./src/**/*.{js,jsx,ts,tsx}',
		'./ui/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#222222',
					invert: '#ffffff',
					emphasis: '#111827',
					2: '#191818',
					3: '#6A6A6A',
					4: '#3E3D3D',
					5: '#E8E8E8',
				},
			},
			fontSize: {
				'10': '10px',
				'12': '12px',
				'14': '14px',
				'16': '16px',
				'18': '18px',
				'20': '20px',
				'24': '24px',
				'28': '28px',
				'32': '32px',
				'36': '36px',
				'40': '40px',
				'44': '44px',
				'48': '48px',
				'52': '52px',
				'56': '56px',
				'60': '60px',
				'64': '64px',
				'72': '72px',
				'80': '80px',
				'96': '96px',
			},
		},
		fontFamily: {
			inter: ['Inter', 'Arial', 'sans-serif'],
			sans: ['Inter', 'Arial', 'sans-serif'],
		},
		fontWeight: {
			'100': '100',
			'200': '200',
			'300': '300',
			'400': '400',
			'500': '500',
			'600': '600',
			'700': '700',
			'800': '800',
		},
	},
	plugins: [],
} satisfies Config;

export default config;
