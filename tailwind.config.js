let tokens = require('./src/tokens.json');

const colorsTokens = tokens.colors;

const generateCustomColorsFromTokens = (colorTokens) => {
  const customColors = {};

  for (family in colorTokens) {
    const colorFamily = colorTokens[family];

    for (const color in colorFamily) {
      const brandColorDefinition = {};
      for (const shade in colorFamily[color]) {
        brandColorDefinition[shade] = colorFamily[color][shade].hex;
      }
      customColors[color] = brandColorDefinition;
    }
  }
  return customColors;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: generateCustomColorsFromTokens(colorsTokens),
    },
  },
  plugins: [],
  /* see: https://tailwindcss.com/docs/content-configuration#class-detection-in-depth
   * and: https://tailwindcss.com/docs/content-configuration#using-regular-expressions
   */
  safelist: [{ pattern: /bg-(primary|neutral|warning|danger|orange|blue|purple|pink)-.+/ }],
};
