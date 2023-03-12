const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			display: ['Redacted35']
		},
		extend: {}
	},

	plugins: [forms]
};

module.exports = config;
