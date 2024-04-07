/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		fontSize: {
			name: '1.2rem',
			symbol: '.95rem',
		},
		extend: {
			colors: {
				dark: '#192633',
			},
			container: {
				padding: {
					'DEFAULT': '1rem',
					'sm': '2rem',
					'lg': '5rem',
					'xl': '6rem',
					'2xl': '8rem',
				},
				keyframes: {
					spin: {
						'0%': { transform: 'rotate(0deg)' },
						'100%': { transform: 'rotate(360deg)' },
					},
				},
			},
		},

		plugins: [],
	},
};
