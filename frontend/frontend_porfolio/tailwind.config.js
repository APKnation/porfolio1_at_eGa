/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#173E4B',
        accent: '#BEFF8D',
        surface: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Tinos', 'serif'],
      },
    },
  },
  plugins: [],
};

