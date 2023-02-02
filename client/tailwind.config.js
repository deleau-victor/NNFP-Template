/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				// import your fonts here
				// cambon: ['Cambon'],
			},
			keyframes: {
				// make your keyframe for animations here
				// buttonPop: {
				// 	'0%, 100%': { transform: 'scale(1)' },
				// 	'50%': { transform: 'scale(0.9)' },
				// },
			},
			animation: {
				// define your animations here
				// buttonPop: 'buttonPop 0.2s ease-in-out',
			},
			//> Define your theme system here <//
			colors: {
				// Primary
				primary: '#694D75',
				'primary-darker': '#9F2F19',
				'on-primary-light': '#FFFFFF',
				'on-primary': '#FFFFFF',
				// Secondary
				secondary: '#DBBEA1',
				'on-secondary': '#FFFFFF',
				'secondary-transparent': '#e1625314',
				'secondary-transparent-darker': '#9F2F1914',
				'on-secondary-transparent': '#E16253',
				// Background
				background: '#A37B73',
				'on-background': '#003938',
				// Surface
				surface: '#F8F4F0',
				'surface-dark': '#EEE8E2',
				'on-surface': '#003938',
				'on-surface-dark': '#003938',
				// Gray
				gray: '#BBB6B6',
				'light-gray': '#E2DFDF',
				'dark-gray': '#989292',
				'heavy-gray': '#66676E',
				'on-gray': '#FFFFFF',
				'on-dark-gray': '#FFFFFF',
				'on-heavy-gray': '#FFFFFF',
				// Status colors
				error: '#ff3333',
				succes: '#4BB543',
			},
		},
	},
	plugins: [],
}
