import defaultTheme from 'tailwindcss/defaultTheme';

import tokens from '../tokens.json';

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

// Border
const borderTokens = tokens.border;
const generateBorderRadiusTokens = (borderTokens) => {
  const radiiMapping = {};
  for (const radius in borderTokens) {
    radiiMapping[radius] = `${borderTokens[radius]}px`;
  }
  return radiiMapping;
};

// Spacing
const spacingTokens = tokens.spacing;
const generateSpacingTokens = (spacingTokens) => {
  const mapping = {};
  for (const value in spacingTokens) {
    mapping[value] = `${spacingTokens[value]}px`;
  }
  return mapping;
};

export const theme = {
  extend: {
    borderRadius: generateBorderRadiusTokens(borderTokens),
    colors: generateCustomColorsFromTokens(colorsTokens),
    fontFamily: {
      sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
    },
    fontSize: generateFontSizeTokens(typographyTokens),
    spacing: generateSpacingTokens(spacingTokens),
  },
};

/* see: https://tailwindcss.com/docs/content-configuration#class-detection-in-depth
 * and: https://tailwindcss.com/docs/content-configuration#using-regular-expressions
 */
export const safelist = [
  {
    pattern: /(text|bg)-(primary|neutral|warning|danger|orange|blue|purple|pink)-.+/,
    variants: ['hover', 'active', 'disabled', 'focus'],
  },
  { pattern: /font-(normal|bold|black)/ },
  { pattern: /text-(caption|paragraph|heading|display)-.+/ },
  { pattern: /rounded(-.{1,2})?-(none|small|medium|large|pill)/ },
  { pattern: /border-.+/ },
  { pattern: /space-.+/ },
  { pattern: /(p|m).?-.+/ },
];
