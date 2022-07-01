const fotonTailwind = require('./src/lib/tailwind/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: fotonTailwind.theme,
  safelist: fotonTailwind.safelist,
  plugins: [require('@tailwindcss/forms')],
};
