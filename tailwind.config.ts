import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				backgroundColor: "#FFFFFF",
				primaryAccent: "#1DB954",
				secondaryAccent: "#1ED760",
				primaryText: "#040512",
				secondaryText: "#4A4A4A",
				tertiaryText: "#808080",
				customHighlight: "#FF4081",
				customWarning: "#FF5722",
				customSuccess: "#4CAF50",
				customInfo: "#2196F3",
			},
		},
	},
};
export default config;
