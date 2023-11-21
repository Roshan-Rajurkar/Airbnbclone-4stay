/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // here we add constants
      colors: {
        primary: '#F5385D',
      },
    },
  },
  plugins: [],
}