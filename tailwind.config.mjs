/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				departure: ['DepartureMonospace', 'monospace'],
				sans: ['Manrope Variable', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
