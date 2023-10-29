/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5FD1D4",
        secondary: {
          100: "#1C3342",
          200: "#5FD1D4",
        },
      },
    },
  },
  plugins: [],
}

