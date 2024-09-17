/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        bree: ["Bree Serif", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

