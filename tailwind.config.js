const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Poppins"',
          '"Noto Sans Bengali"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: colors.blue,
        gray: colors.slate,
      },
    },
  },
  plugins: [],
}
