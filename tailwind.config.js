/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    colors: {
      custom_white: "#FFFFFF",
      custom_black: "#000000",
      custom_gray: "#808080",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
