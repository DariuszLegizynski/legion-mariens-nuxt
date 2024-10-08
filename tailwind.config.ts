import type { Config } from "tailwindcss"

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "hsl(227, 46%, 44%)",
				"primary-light": "hsl(227, 46%, 64%)",
				accent: "hsl(339, 84%, 43%)",
				black: "hsl(210, 11%, 15%)",
				white: "hsl(5, 0%, 100%)",
				grey: "hsl(0, 0%, 74%)",
				"grey-dark": "hsl(0, 0%, 20%)",
			},
			screens: {
				xxs: "375px",
				xs: "425px",
				"2xl": "1440px",
				"3xl": "1920px",
			},
		},
	},
	plugins: [],
}
export default config
