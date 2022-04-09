const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: "#C8E4FA",
          200: "#93C7F6",
          300: "#5B9DE4",
          400: "#0043A8",
          500: "#003390",
          800: "#002678",
        },
        success: {
          100: "#D2F9C7",
          200: "#9EF492",
          300: "#5DDE59",
          400: "#2FBE38",
          500: "#009317",
          800: "#007E1F",
        },
        white: {
          100: "#FFFFFF",
          200: "#FBFBFB",
          300: "#F9F9F9",
        },
        gray: {
          100: "#D7D7D7",
          200: "#AFAFAF",
          300: "#7A7A7A",
          400: "#67595A",
        },
        black: {
          100: "#242424",
          200: "#3F3F3F",
        },
      },
    },
  },
  plugins: [],
};
