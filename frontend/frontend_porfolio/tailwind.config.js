/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D0D14',
          50:  '#f0f0f5',
          100: '#d4d4e8',
          200: '#a8a8d1',
          300: '#7a7ab9',
          400: '#5050a0',
          500: '#2d2d80',
          600: '#1e1e5e',
          700: '#14143f',
          800: '#0d0d2a',
          900: '#0D0D14',
          950: '#060609',
        },
        accent: {
          DEFAULT: '#7C3AED',
          50:  '#f5f0ff',
          100: '#ede5ff',
          200: '#d8c8ff',
          300: '#bc9dff',
          400: '#9d6aff',
          500: '#7C3AED',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4a1990',
          900: '#3b1170',
          950: '#200854',
        },
        surface: {
          DEFAULT: '#F5F3EE',
          50:  '#FDFCFA',
          100: '#F5F3EE',
          200: '#EAE6DC',
          300: '#D8D2C4',
          400: '#BFB8A6',
          500: '#A09880',
          600: '#7d7561',
          700: '#5c5647',
          800: '#3c3830',
          900: '#1e1c18',
          950: '#0f0e0c',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

