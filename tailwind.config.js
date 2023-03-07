const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        screenHeightWithoutHeader: 'calc(100vh - 56px)'
      },
      height: {
        screenHeightWithoutHeader: 'calc(100vh - 56px)'
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hoverfocus', ['&:hover', '&:focus'])
    })
  ],
};
