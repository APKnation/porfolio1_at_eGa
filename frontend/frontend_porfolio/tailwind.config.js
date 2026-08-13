/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#173E4B',
          50:  '#e8f4f7',
          100: '#c5e2ea',
          200: '#8fc5d4',
          300: '#59a8be',
          400: '#2e8ba7',
          500: '#1e6e88',
          600: '#175767',
          700: '#173E4B',
          800: '#102c36',
          900: '#081a21',
          950: '#040d10',
        },
        accent: {
          DEFAULT: '#BEFF8D',
          50:  '#f5ffe8',
          100: '#e8ffcc',
          200: '#d4ffaa',
          300: '#BEFF8D',
          400: '#a8f570',
          500: '#8fe052',
          600: '#72c038',
          700: '#56a024',
          800: '#3c7e15',
          900: '#255c09',
          950: '#123a03',
        },
        surface: {
          DEFAULT: '#F9ECE5',
          50:  '#FEFAF8',
          100: '#F9ECE5',
          200: '#F0D5C8',
          300: '#E4BAA8',
          400: '#D49B85',
          500: '#BE7A61',
          600: '#9e5c44',
          700: '#7a4232',
          800: '#542c21',
          900: '#2e1710',
          950: '#170b07',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

