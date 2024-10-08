/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                departure: ["DepartureMonospace", "monospace"],
                sans: ["Inter", "sans-serif"],
                arvo: ["Arvo", "serif"],
            },
            colors: {
                row: {
                    design: "#08C2FF",
                    frontend: "#73EC8B",
                    backend: "#FCDE70",
                    fullstack: "#FF8C9E",
                },
                "persian-blue": {
                    50: "#edf2ff",
                    100: "#dee8ff",
                    200: "#c3d4ff",
                    300: "#9fb6ff",
                    400: "#798eff",
                    500: "#5a67fa",
                    600: "#3c3def",
                    700: "#3c3ad6",
                    800: "#2828ab",
                    900: "#292c86",
                    950: "#18184e",
                },
                shark: {
                    50: "#f6f7f9",
                    100: "#edeef1",
                    200: "#d6dae1",
                    300: "#b2bbc7",
                    400: "#8997a7",
                    500: "#6a7a8d",
                    600: "#556374",
                    700: "#45505f",
                    800: "#3c4450",
                    900: "#353b45",
                    950: "#252930",
                },

                "corner-highlight": "#FF8343",
                link: "#6aa4ca",
                background: "#16181f",
                foreground: "#252930",
            },
        },
    },
    plugins: [],
};
