/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '450px',
      
      'sm': '576px',

      'md': '960px',

      'lg': '1440px',
    },
    extend: {
      backgroundImage:{
        'events-bg': "url('./src/assets/events-bg.jpg')",
        'events-card': "url('./src/assets/events-card.png')",
        'modal-bg':"url('./src/assets/modalBg.png')",
        'ticket1':"url('./src/assets/ticket-1.svg')",
        'ticket2':"url('./src/assets/ticket-2.svg')",
        'ticket3':"url('./src/assets/ticket-3.svg')",
        'login-bg':"url('./src/assets/login-bg.png')",
        'event-sec-bg':"url('./src/assets/h1.png')",
        
      }
    },
  },
  plugins: [],
}