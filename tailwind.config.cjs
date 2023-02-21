const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#ffd333",
					"primary-focus": "#fdc112",
					"primary-content": "#151719",
					secondary: "#00e599",
					"secondary-focus": "#00c07c",
					"secondary-content": "#151719",
					accent: "#fd4391",
					"accent-focus": "#ee1465",
					"accent-content": "#151719",
					neutral: "#1C1E21",
					"neutral-focus": "#151719",
					"neutral-content": "#FAFAFB",
					"base-100": "#212326",
					"base-200": "#1C1E21",
					"base-300": "#151719",
					"base-content": "#FAFAFB",
					info: "#00aaff",
					"info-content": "#151719",
					success: "#52FA7C",
					warning: "#F1FA89",
					error: "#dc2626",
					"error-content": "#FAFAFB",
				},
			},
		],
	},

	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

module.exports = config
