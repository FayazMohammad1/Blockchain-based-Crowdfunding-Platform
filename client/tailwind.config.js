/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes:{
        scroll: {
          '0%': {transform: 'translateX(0px)'},
          '100%': {transform: 'translateX(-1100px)'} 
        }
      },
      animation: {
        'scroll' : 'scroll 1s linear infinite',
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
    },
  },
  plugins: [],
}

