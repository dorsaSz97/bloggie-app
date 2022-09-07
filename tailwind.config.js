/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#2460f7',
        customLight: '#fcfcfc',
        customBlack: '#141414',
        customGrey: '#242424',
        customText: '#8c8b8b',
      },
      fontFamily: {
        fontMain: ['Plus Jakarta', 'sans-serif'],
      },
    },
  },

  plugins: [],
};
