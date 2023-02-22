/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#1fb6ff',
        purple: '#8A4FFF',
      },
      backgroundImage: {
        'purple-pattern': "url('./Images/rectangle.png')",
      }
    },
  },
  plugins: [],
}