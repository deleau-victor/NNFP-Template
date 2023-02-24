const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
		'./styles/**/*.{css, scss, sass}',
		!'./node_modules/**/*',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				// import your fonts here
				// cambon: ['Cambon'],
			},
			keyframes: {
				buttonActive: {
					'0%, 100%': { 'background-position': 'top' },
					'50%': { 'background-position': 'bottom' },
				},
				buttonPop: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(0.9)' },
				},
			},
			animation: {
				// define your animations here
				buttonActive: 'buttonActive 0.4s ease-in-out',
				buttonPop: 'buttonPop 0.2s ease-in-out',
			},
			/**
			 * > DEFINE YOUR THEME SYSTEM HERE <
			 * A @Material inspired theme system for TailwindCSS by @deleau-victor
			 * @see https://m3.material.io/styles/color/the-color-system/key-colors-tones
			 * Light Theme
			 * 	40  tone is LIGHT-COLOR
			 * 	100 tone is LIGHT-ON-COLOR
			 * 	90  tone is LIGHT-COLOR-CONTAINER
			 * 	10  tone is LIGHT-ON-COLOR-CONTAINER
			 * Dark Theme
			 * 	80 tone is DARK-COLOR
			 * 	20 tone is DARK-ON-COLOR
			 * 	30 tone is DARK-COLOR-CONTAINER
			 * 	90 tone is DARK-ON-COLOR-CONTAINER
			 */
			colors: {
				/** @Primary */
				primary: {
					0: 'hsl(0, 0%, 0%)',
					10: 'hsl(190, 100%, 8%)',
					20: 'hsl(190, 100%, 13%)',
					25: 'hsl(190, 100%, 16%)',
					30: 'hsl(190, 100%, 19%)',
					35: 'hsl(190, 100%, 21%)',
					40: 'hsl(190, 100%, 25%)',
					50: 'hsl(190, 100%, 31%)',
					60: 'hsl(190, 100%, 37%)',
					70: 'hsl(190, 70%, 53%)',
					80: 'hsl(190, 92%, 66%)',
					90: 'hsl(190, 100%, 85%)',
					95: 'hsl(190, 100%, 93%)',
					98: 'hsl(190, 100%, 93%)',
					99: 'hsl(190, 100%, 99%)',
					100: 'hsl(0, 0%, 100%)',
				},
				'light-primary': 'hsl(190, 100%, 25%)',
				'light-on-primary': 'hsl(0, 0%, 100%)',
				'light-primary-container': 'hsl(190, 100%, 85%)',
				'light-on-primary-container': 'hsl(190, 100%, 8%)',
				'dark-primary': 'hsl(190, 92%, 66%)',
				'dark-on-primary': 'hsl(190, 100%, 13%)',
				'dark-primary-container': 'hsl(190, 100%, 19%)',
				'dark-on-primary-container': 'hsl(190, 100%, 85%)',
				/** @Secondary */
				secondary: {
					0: 'hsl(0, 0%, 0%)',
					10: 'hsl(72, 100%, 6%)',
					20: 'hsl(72, 100%, 10%)',
					25: 'hsl(72, 100%, 13%)',
					30: 'hsl(72, 100%, 15%)',
					35: 'hsl(72, 100%, 17%)',
					40: 'hsl(72, 100%, 20%)',
					50: 'hsl(72, 94%, 26%)',
					60: 'hsl(72, 60%, 38%)',
					70: 'hsl(72, 48%, 48%)',
					80: 'hsl(72, 57%, 58%)',
					90: 'hsl(72, 79%, 69%)',
					95: 'hsl(72, 97%, 74%)',
					98: 'hsl(72, 100%, 89%)',
					99: 'hsl(72, 100%, 94%)',
					100: 'hsl(0, 0%, 100%)',
				},
				'light-secondary': 'hsl(72, 100%, 20%)',
				'light-on-secondary': 'hsl(0, 0%, 100%)',
				'light-secondary-container': 'hsl(72, 79%, 69%)',
				'light-on-secondary-container': 'hsl(72, 100%, 6%)',
				'dark-secondary': 'hsl(72, 57%, 58%)',
				'dark-on-secondary': 'hsl(72, 100%, 10%)',
				'dark-secondary-container': 'hsl(72, 100%, 15%)',
				'dark-on-secondary-container': 'hsl(72, 79%, 69%)',
				/** @Tertiary */
				tertiary: {
					0: 'hsl(0, 0%, 0%)',
					10: 'hsl(312, 100%, 12%)',
					20: 'hsl(312, 100%, 19%)',
					25: 'hsl(312, 100%, 22%)',
					30: 'hsl(312, 85%, 28%)',
					35: 'hsl(312, 66%, 35%)',
					40: 'hsl(312, 57%, 41%)',
					50: 'hsl(312, 49%, 52%)',
					60: 'hsl(312, 66%, 63%)',
					70: 'hsl(312, 100%, 74%)',
					80: 'hsl(312, 100%, 84%)',
					90: 'hsl(312, 100%, 92%)',
					95: 'hsl(312, 100%, 96%)',
					98: 'hsl(312, 100%, 99%)',
					99: 'hsl(312, 100%, 99%)',
					100: 'hsl(0, 0%, 100%)',
				},
				'light-tertiary': 'hsl(312, 57%, 41%)',
				'light-on-tertiary': 'hsl(0, 0%, 100%)',
				'light-tertiary-container': 'hsl(312, 100%, 92%)',
				'light-on-tertiary-container': 'hsl(312, 100%, 12%)',
				'dark-tertiary': 'hsl(312, 100%, 84%)',
				'dark-on-tertiary': 'hsl(312, 100%, 19%)',
				'dark-tertiary-container': 'hsl(312, 85%, 28%)',
				'dark-on-tertiary-container': 'hsl(312, 100%, 92%)',
				/** @Neutral */
				neutral: {
					0: 'hsl(0, 0%, 0%)',
					10: 'hsl(195, 7%, 11%)',
					20: 'hsl(195, 4%, 19%)',
					25: 'hsl(195, 3%, 23%)',
					30: 'hsl(195, 4%, 28%)',
					35: 'hsl(195, 2%, 32%)',
					40: 'hsl(195, 2%, 37%)',
					50: 'hsl(195, 2%, 47%)',
					60: 'hsl(195, 2%, 56%)',
					70: 'hsl(195, 2%, 67%)',
					80: 'hsl(195, 3%, 78%)',
					90: 'hsl(195, 5%, 89%)',
					95: 'hsl(195, 10%, 94%)',
					98: 'hsl(195, 27%, 98%)',
					99: 'hsl(195, 60%, 99%)',
					100: 'hsl(0, 0%, 100%)',
				},
				/** @Neutral_Variant */
				'neutral-variant': {
					0: 'hsl(0, 0%, 0%)',
					10: 'hsl(198, 21%, 10%)',
					20: 'hsl(198, 13%, 18%)',
					25: 'hsl(198, 10%, 23%)',
					30: 'hsl(198, 8%, 27%)',
					35: 'hsl(198, 7%, 32%)',
					40: 'hsl(198, 6%, 36%)',
					50: 'hsl(198, 5%, 46%)',
					60: 'hsl(198, 6%, 56%)',
					70: 'hsl(198, 7%, 67%)',
					80: 'hsl(198, 11%, 77%)',
					90: 'hsl(198, 22%, 88%)',
					95: 'hsl(198, 40%, 94%)',
					98: 'hsl(198, 100%, 97%)',
					99: 'hsl(198, 100%, 99%)',
					100: 'hsl(0, 0%, 100%)',
				},
				/** @Background_and_Surface */
				// Light
				'light-background': 'hsl(195, 60%, 99%)',
				'on-light-background': 'hsl(195, 7%, 11%)',
				'light-surface': 'hsl(195, 60%, 99%)',
				'on-light-surface': 'hsl(195, 7%, 11%)',
				'light-surface-variant': 'hsl(198, 22%, 88%)',
				'on-light-surface-variant': 'hsl(198, 8%, 27%)',
				'light-outline': 'hsl(198, 5%, 46%)',
				// Dark
				'dark-background': 'hsl(195, 7%, 11%)',
				'on-dark-background': 'hsl(195, 5%, 89%)',
				'dark-surface': 'hsl(195, 4%, 19%)',
				'on-dark-surface': 'hsl(195, 5%, 89%)',
				'dark-surface-variant': 'hsl(198, 8%, 27%)',
				'on-dark-surface-variant': 'hsl(198, 11%, 77%)',
				'dark-outline': 'hsl(198, 6%, 56%)',
				/** @Status_Color */
				/** @Error */
				error: {
					0: 'hsl(0, 0%, 0%)',
					10: 'hsl(6, 100%, 13%)',
					20: 'hsl(6, 100%, 21%)',
					25: 'hsl(6, 100%, 25%)',
					30: 'hsl(6, 100%, 29%)',
					35: 'hsl(6, 92%, 34%)',
					40: 'hsl(6, 75%, 42%)',
					50: 'hsl(6, 73%, 53%)',
					60: 'hsl(6, 100%, 64%)',
					70: 'hsl(6, 100%, 75%)',
					80: 'hsl(6, 100%, 84%)',
					90: 'hsl(6, 100%, 92%)',
					95: 'hsl(6, 100%, 96%)',
					98: 'hsl(6, 100%, 98%)',
					99: 'hsl(6, 100%, 99%)',
					100: 'hsl(0, 0%, 100%)',
				},
				'light-error': 'hsl(6, 75%, 42%)',
				'light-on-error': 'hsl(0, 0%, 100%)',
				'light-error-container': 'hsl(6, 100%, 92%)',
				'light-on-error-container': 'hsl(6, 100%, 13%)',
				'dark-error': 'hsl(6, 100%, 84%)',
				'dark-on-error': 'hsl(6, 100%, 21%)',
				'dark-error-container': 'hsl(6, 100%, 29%)',
				'dark-on-error-container': 'hsl(6, 100%, 92%)',
				/** @Succes */
				succes: {
					0: 'hsl(0, 0%, 0%)',
					10: 'hsl(122, 100%, 13%)',
					20: 'hsl(122, 100%, 21%)',
					25: 'hsl(122, 100%, 25%)',
					30: 'hsl(122, 100%, 29%)',
					35: 'hsl(122, 92%, 34%)',
					40: 'hsl(122, 75%, 42%)',
					50: 'hsl(122, 73%, 53%)',
					60: 'hsl(122, 100%, 64%)',
					70: 'hsl(122, 100%, 75%)',
					80: 'hsl(122, 100%, 84%)',
					90: 'hsl(122, 100%, 92%)',
					95: 'hsl(122, 100%, 96%)',
					98: 'hsl(122, 100%, 98%)',
					99: 'hsl(122, 100%, 99%)',
					100: 'hsl(0, 0%, 100%)',
				},
				'light-succes': 'hsl(122, 75%, 42%)',
				'light-on-succes': 'hsl(0, 0%, 100%)',
				'light-succes-container': 'hsl(122, 100%, 92%)',
				'light-on-succes-container': 'hsl(122, 100%, 13%)',
				'dark-succes': 'hsl(122, 100%, 84%)',
				'dark-on-succes': 'hsl(122, 100%, 21%)',
				'dark-succes-container': 'hsl(122, 100%, 29%)',
				'dark-on-succes-container': 'hsl(122, 100%, 92%)',
				/** @Info */
				info: {
					0: 'hsl(0, 0%, 0%)',
					10: 'hsl(204, 100%, 13%)',
					20: 'hsl(204, 100%, 21%)',
					25: 'hsl(204, 100%, 25%)',
					30: 'hsl(204, 100%, 29%)',
					35: 'hsl(204, 92%, 34%)',
					40: 'hsl(204, 75%, 42%)',
					50: 'hsl(204, 73%, 53%)',
					60: 'hsl(204, 100%, 64%)',
					70: 'hsl(204, 100%, 75%)',
					80: 'hsl(204, 100%, 84%)',
					90: 'hsl(204, 100%, 92%)',
					95: 'hsl(204, 100%, 96%)',
					98: 'hsl(204, 100%, 98%)',
					99: 'hsl(204, 100%, 99%)',
					100: 'hsl(0, 0%, 100%)',
				},
				info: {
					dark: 'hsl(204, 100%, 84%)',
					light: 'hsl(204, 75%, 42%)',
				},
				'on-info': {
					dark: 'hsl(204, 100%, 21%)',
					light: 'hsl(0, 0%, 100%)',
				},
				'info-container': {
					dark: 'hsl(204, 100%, 29%)',
					light: 'hsl(204, 100%, 92%)',
				},
				'on-info-container': {
					dark: 'hsl(204, 100%, 92%)',
					light: 'hsl(204, 100%, 13%)',
				},
				/** @Warning */
				warning: {
					0: 'hsl(0, 0%, 0%)',
					10: 'hsl(48, 100%, 13%)',
					20: 'hsl(48, 100%, 21%)',
					25: 'hsl(48, 100%, 25%)',
					30: 'hsl(48, 100%, 29%)',
					35: 'hsl(48, 92%, 34%)',
					40: 'hsl(48, 75%, 42%)',
					50: 'hsl(48, 73%, 53%)',
					60: 'hsl(48, 100%, 64%)',
					70: 'hsl(48, 100%, 75%)',
					80: 'hsl(48, 100%, 84%)',
					90: 'hsl(48, 100%, 92%)',
					95: 'hsl(48, 100%, 96%)',
					98: 'hsl(48, 100%, 98%)',
					99: 'hsl(48, 100%, 99%)',
					100: 'hsl(0, 0%, 100%)',
				},
				'light-warning': 'hsl(48, 75%, 42%)',
				'light-on-warning': 'hsl(0, 0%, 100%)',
				'light-warning-container': 'hsl(48, 100%, 92%)',
				'light-on-warning-container': 'hsl(48, 100%, 13%)',
				'dark-warning': 'hsl(48, 100%, 84%)',
				'dark-on-warning': 'hsl(48, 100%, 21%)',
				'dark-warning-container': 'hsl(48, 100%, 29%)',
				'dark-on-warning-container': 'hsl(48, 100%, 92%)',
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, addComponents }) {
			addUtilities({
				'.elevation-0': {
					'box-shadow': 'none',
				},
				'.elevation-1': {
					'box-shadow':
						'0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24)',
				},
				'.elevation-2': {
					'box-shadow':
						'0 3px 6px 0 rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.23)',
				},
				'.elevation-3': {
					'box-shadow':
						'0 10px 20px 0 rgba(0, 0, 0, 0.19), 0 6px 6px 0 rgba(0, 0, 0, 0.23)',
				},
				'.elevation-4': {
					'box-shadow':
						'0 15px 25px 0 rgba(0, 0, 0, 0.24), 0 5px 10px 0 rgba(0, 0, 0, 0.22)',
				},
				'.elevation-5': {
					'box-shadow':
						'0 20px 40px 0 rgba(0, 0, 0, 0.3), 0 5px 10px 0 rgba(0, 0, 0, 0.22)',
				},
			})

			addComponents({
				'.label-large': {
					'font-size': '14px',
					'font-weight': '500',
					'line-height': '20px',
					'letter-spacing': '0.1px',
				},
				'.label-medium': {
					'font-size': '12px',
					'font-weight': '500',
					'line-height': '16px',
					'letter-spacing': '0.5px',
				},
				'.label-small': {
					'font-size': '11px',
					'font-weight': '500',
					'line-height': '16px',
					'letter-spacing': '0.5px',
				},
			})
		}),
	],
}
