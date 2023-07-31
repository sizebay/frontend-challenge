/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Outfit"],
    },
    colors: {
      'blue': '#8ed1fc',
      'black': '#000000',
      'white': '#ffffff',
      'gray': '#d2ecff',
      'light': '#e3e3e3'
    },
    extend: {},
  },
  plugins: [],
}

