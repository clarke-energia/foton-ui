const fotonTheme = require('./src/lib/tailwind/plugin').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: fotonTheme,
  plugins: [require('@tailwindcss/forms')],
  /* see: https://tailwindcss.com/docs/content-configuration#class-detection-in-depth
   * and: https://tailwindcss.com/docs/content-configuration#using-regular-expressions
   */
  safelist: [
    {
      pattern: /bg-(primary|neutral|warning|danger|orange|blue|purple|pink)-.+/,
      variants: ['hover', 'active', 'disabled', 'focus'],
    },
    { pattern: /font-(normal|bold|black)/ },
    { pattern: /text-(caption|paragraph|heading|display)-.+/ },
    { pattern: /rounded(-.{1,2})*-(none|small|medium|large|pill)/ },
    { pattern: /border-.+/ },
    { pattern: /space-.+/ },
    { pattern: /p-.+/ },
  ],
};
