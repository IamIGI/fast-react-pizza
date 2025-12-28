/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace', //Sans is default tailwind font, and we overwrite it with out font
    },

    extend: {
      colors: {
        pizza: '#123456',
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
