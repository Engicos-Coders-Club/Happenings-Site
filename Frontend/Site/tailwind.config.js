/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "450px",

      sm: "576px",

      md: "960px",

      lg: "1440px",
    },
    extend: {
      backgroundImage: {
        "events-bg": "url('./src/assets/events-bg.jpg')",
        "events-card": "url('./src/assets/events-card.png')",
        "modal-bg": "url('./src/assets/modalBg.png')",
        ticket1: "url('./src/assets/ticket-1.svg')",
        ticket2: "url('./src/assets/ticket-2.svg')",
        ticket3: "url('./src/assets/ticket-3.svg')",
        "login-bg": "url('./src/assets/login-bg.png')",
        "event-sec-bg": "url('./src/assets/h1.png')",
        "point-bg": "url('./src/assets/export_bg.png')",
        // "hero-bg": "url('./src/assets/heroBGN.png')",
      },
      fontFamily: {
        MANGO: ["MANGO", "Bebas Neue", 'Oswald', "Inter", "sans-serif"],
        BEBAS: ["Bebas Neue", "Inter", "sans-serif"],
        Merriweather: ["Merriweather", "Old Standard TT", "serif"],
        basic: ['Roboto Condensed', 'Inter', 'sans-serif']
      },
      "event-sec-bg": "url('./src/assets/h1.png')",
      fontSize: {
        "9xl": "12rem",
      },
      colors: {
        "cus-orange": "#FF6600",
        "cus-bright-orange": "#ED0D06",
      },
    },
  },
  plugins: [],
};
