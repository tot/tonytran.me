/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                departure: ["DepartureMonospace", "monospace"],
                sans: ["Inter", "sans-serif"],
            },
            colors: {
                row: {
                    design: "#08C2FF",
                    frontend: "#73EC8B",
                    backend: "#FCDE70",
                    fullstack: "#FF8C9E",
                },
                "corner-highlight": "#FF8343",
            },
        },
    },
    plugins: [],
};
