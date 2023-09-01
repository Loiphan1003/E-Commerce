import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Arial", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        primary_1: "#2F2E30",
        secondary: "#F5F5F5",
        secondary_2: "#DB4444",
        text: "#FAFAFA",
        buttonBg: "#DB4444",
        button_1: "#00FF66",
        hover_button: "#E07575",
      },
    },
  },
  plugins: [],
};
export default config;
