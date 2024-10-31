/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,sass,ts}"],
  theme: {
    extend: {
      colors: {
        lime: "#D8DB2F",
        slate: {
          100: "#E4F4FD",
          300: "#9ABED5",
          500: "#6B94A8",
          700: "#4E6E7E",
          900: "#133041",
        },
        red: "#D73328",
      },
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
