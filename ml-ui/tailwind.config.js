/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'primary-50': '#c5f7db',
      'primary-100': '#60be8f',
      'primary-200': '#4c9972',
      'primary': '#28805f',
      'primary-500': '#0a160f',
      'secondary-50': '#c7f4fb',
      'secondary-100': '#1cd8ef',
      'secondary': '#00a8b8',
      'secondary-300': '006d77',
      'secondary-500': '#051618',

      'black': '#0f1211',
      'white': '#ffffff',

      'gray': '#edf6f9',
      'gray-100': '#dee9eb',
      'gray-200': '#78969f',
      'gray-300': '#455459',
      'gray-500': '#00171b',

      'green':'#28805f',
      'red': '#eb5e28'
    },
    extend: {},
  },
  plugins: [],
}
