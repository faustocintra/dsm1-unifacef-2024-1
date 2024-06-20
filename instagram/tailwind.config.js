/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        bgPadrao: '#0c990c',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};
