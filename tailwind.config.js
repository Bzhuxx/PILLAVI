/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
// Initialization for ES Users

module.exports = {

	plugins: [
		require('flowbite/plugin')
	]

}

module.exports = {

	content: [
		"./node_modules/flowbite/**/*.js"
	]

}

module.exports = {
	content: ["./index.html", "./contacts.html", "./calculator.html"],
	theme: {
		extend: {},
		fontFamily: {
			'sans': ['Lato', 'sans-serif'],
		},
		colors: {

			"black-#1B233D": "#1B233D",
			"black-#26272C": "#26272C",
			"black-#27282A": "#27282A",
			"black-#333539": "#333539",
			"black-#363A49": "#363A49",
			"black-#37383C": "#37383C",
			"black-#454545": "#454545",

			"blue-#005BFF": "#005BFF",
			"blue-#080B16": "#080B16",
			"blue-#0E121F": "#0E121F",
			"blue-#121B35": "#121B35",
			"blue-#212E55": "#212E55",
			"blue-#30BAEE": "#30BAEE",
			"blue-#F1F5FC": "#F1F5FC",

			"green-#0AAF60": "#0AAF60",
			"green-#F2FAF6": "#F2FAF6",

			"grey-#3E3E3F": "#3E3E3F",
			"grey-#454956": "#454956",
			"grey-#4A4A4A": "#4A4A4A",
			"grey-#4E5057": "#4E5057",
			"grey-#F4F4F4": "#F4F4F4",
			"grey-#505257": "#505257",
			"grey-#545760": "#545760",
			"grey-#5A5A5A": "#5A5A5A",
			"grey-#5D5E62": "#5D5E62",
			"grey-#5E5F65": "#5E5F65",
			"grey-#5F616B": "#5F616B",
			"grey-#626368": "#626368",
			"grey-#77787B": "#77787B",
			"grey-#85868C": "#85868C",
			"grey-#94969C": "#94969C",
			"grey-#9E9FA3": "#9E9FA3",
			"grey-#AFB2BC": "#AFB2BC",
			"grey-#C5CBDA": "#C5CBDA",
			"grey-#CDD4D9": "#CDD4D9",
			"grey-#EBEDF3": "#EBEDF3",
			"grey-#F8F8F8": "#F8F8F8",

			"red-#E46666": "#E46666",

			"violet-#481173": "#481173",
			"violet-#F9F6FC": "#F9F6FC",

			"yellow-#DFAE00": "#DFAE00",
			"yellow-#FFFDF4": "#FFFDF4",

			"white": "#ffffff",

		},
		screens: {
			'2xl': '1280px',
		},
		fontSize: {
			'xs': "0.6875rem",
			'sm': "0.75rem",
			'base': "0.8125rem",
			'xl': "0.875rem",
			'2xl': "0.9375rem",
			'3xl': "1rem",
			'4xl': "1.0625rem",
			'5xl': "1.125rem",
			'6xl': "1.1875rem",
			'7xl': "1.25rem",
			'7.5xl': "1.5rem",
			'8xl': "2.25rem",
			'9xl': "2.8125rem",
			'10xl': "3.375rem",
		}
	},
	plugins: [],
}

