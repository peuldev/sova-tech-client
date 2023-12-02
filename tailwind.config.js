/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    colors: {
      custom_blue: "#1fb6ff",
      custom_red: "#e80f0f",
      custom_yellow: "#fed700",
      custom_white: "#FFFFFF",
      custom_black: "#303030",
      custom_gray: "#f7f7f7",
      custom_gray_color: "#7b7b7b",
      custom_gray_btn: "#eef0f1",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
