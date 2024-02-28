/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        cmyk: {
          ...require('daisyui/src/theming/themes')['cmyk'],
          black: '#000000',
          white: '#ffffff',
          icewhite: '#ebebeb',
          grey: '#5d5d5d',
          lightblue: '#9daaf2',
          darkblue: '#1a2238',
          blackblue: '#0c1220',
          orange: '#ff6a3d',
        },
        night: {
          ...require('daisyui/src/theming/themes')['night'],
          black: '#000000',
          white: '#ffffff',
          icewhite: '#ebebeb',
          grey: '#5d5d5d',
          lightblue: '#9daaf2',
          darkblue: '#1a2238',
          blackblue: '#0c1220',
          orange: '#ff6a3d',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
