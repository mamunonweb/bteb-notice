const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', '"Noto Sans Bengali"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.blue,
        gray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
