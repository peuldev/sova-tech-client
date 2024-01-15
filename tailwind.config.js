/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      custom_white: "#FFFFFF",
      custom_black: "#000000",
      custom_gray: "#808080",
      custom_blue: "#0000FF",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
