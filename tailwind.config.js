/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        purple: {
          400: '#9D6FFF',
          600: '#7C3AED',
        },
      },
    },
  },
  plugins: [],
};