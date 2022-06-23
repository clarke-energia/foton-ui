const defaultTheme = require('tailwindcss/defaultTheme');
const tokens = require('./src/tokens.json');

// Colors
const colorsTokens = tokens.colors;

const generateCustomColorsFromTokens = (colorTokens) => {
  const customColors = {};

  for (const family in colorTokens) {
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

// Typography
const typographyTokens = tokens.typography;

const generateFontSizeTokens = (typographyTokens) => {
  const fontSize = {};
  for (const family in typographyTokens) {
    const typographyFamily = typographyTokens[family];
    const sizes = Object.keys(typographyFamily).filter((key) => key !== 'fontFamily');

    sizes.forEach((size) => {
      fontSize[`${family}-${size}`] = [
        `${typographyFamily[size].fontSize}px`,
        `${typographyFamily[size].lineHeight}px`,
      ];
    });
  }
  return fontSize;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: generateCustomColorsFromTokens(colorsTokens),
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: generateFontSizeTokens(typographyTokens),
    },
  },
  plugins: [],
  /* see: https://tailwindcss.com/docs/content-configuration#class-detection-in-depth
   * and: https://tailwindcss.com/docs/content-configuration#using-regular-expressions
   */
  safelist: [
    { pattern: /bg-(primary|neutral|warning|danger|orange|blue|purple|pink)-.+/ },
    { pattern: /font-(normal|bold|black)/ },
    { pattern: /text-(caption|paragraph|heading|display)-.+/ },
  ],
};
