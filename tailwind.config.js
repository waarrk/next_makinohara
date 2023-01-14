/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        base: '#081b2c',
        main: '#38536e',
        accent: '#dc8a31',
        brack: '#000000',
      },
    },
  },
  plugins: [],
}
