/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: ['cmyk', 'night']
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
