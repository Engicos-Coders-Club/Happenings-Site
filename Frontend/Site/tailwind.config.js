/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'events-bg': "url('./src/assets/events-bg.jpg')",
        'events-card': "url('./src/assets/events-card.png')",

      }
    },
  },
  plugins: [],
}