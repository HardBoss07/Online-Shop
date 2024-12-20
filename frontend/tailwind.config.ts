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
        primary: "#134663", // color1: primary brand color
        secondary: "#6baac6", // color2: secondary brand color
        highlight: "#498ead", // color3: primary highlight color
        highlight2: "#134663", // color4: secondary highlight color
        navbar: "#aed7e3", // color5: nav bar color
        offwhite: "#edf2f4", // color6: off-white color
        offblack: "#151719", // color7: off-black color
      },
      fontFamily: {
        roboto: ["'Roboto'", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
