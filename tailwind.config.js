module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		container: {
			center: true,
			padding: "1rem",
		},
		screens: {
			"sm": "576px",
			"md": "768px",
			"lg": "992px",
			"xl": "1200px",
			"2xl": "1400px",
		},
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
			serif: ["Montserrat", "sans-serif"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
	],
	corePlugins: {
		gridTemplateColumns: false,
	},
};
