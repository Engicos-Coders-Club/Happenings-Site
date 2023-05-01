/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '450px',
      
      'sm': '576px',

      'md': '960px',

      'lg': '1440px',
    },
    extend: {},
  },
  plugins: [],
}

