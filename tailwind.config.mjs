/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                departure: ["DepartureMonospace", "monospace"],
                sans: ["Ubuntu", "sans-serif"],
            },
            colors: {
                row: {
                    design: "#7695FF",
                    frontend: "#46c7b4",
                    backend: "#FCDE70",
                    fullstack: "#FF8C9E",
                },
                "corner-highlight": "#FF8343",
            },
        },
    },
    plugins: [],
};
