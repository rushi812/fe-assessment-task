import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "rgba(21, 151, 228, 0.83)",
      cardColor: "#ffffff",
      cardBorder: "#e6e6e6",
      cardBorder1: "#DADEDF",
      bgGrey: "#D8D8D8",
      fontDark: "#212121",
      fontDark1: "#182021",
      fontError: "#D86161",
      fontWhite: "#fafafa",
      fontPlaceholder: "#7a7a7a",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
