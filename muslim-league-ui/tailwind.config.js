/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'bg-primary': '#60be8f',
      'bg-secondary': '#00a8b8',
      't-primary': '#edf6f9',
      't-secondary': '#081c15',
      'blue': '#006d77',
      'green':'#28805f',
      'red': '#eb5e28'
    },
    extend: {},
  },
  plugins: [],
}
