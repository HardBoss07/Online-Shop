import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498db", // color1: primary brand color
        secondary: "#2ecc71", // color2: secondary brand color
        highlight: "#f39c12", // color3: primary highlight color
        highlight2: "#e74c3c", // color4: secondary highlight color
        navbar: "#34495e", // color5: nav bar color
        offwhite: "#f5f5f5", // color6: off-white color
        offblack: "#2c3e50", // color7: off-black color
      },
      fontFamily: {
        roboto: ["'Roboto'", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
