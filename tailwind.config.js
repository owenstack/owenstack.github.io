/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: ['night']
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
