/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#55C1FF",
        background: "#FEFEFE",
        text: "#000000",
        gray: "#7D7D7D",
      }
    },
  },
  plugins: [],
}

