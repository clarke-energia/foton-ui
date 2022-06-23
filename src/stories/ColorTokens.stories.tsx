import React from 'react';
import { Canvas, Meta, Story } from '@storybook/addon-docs';
import { colors } from '../tokens.json';

type ColorType = keyof typeof colors;

// Semantic
const semanticColors = colors.semantic;
type SemanticColor = keyof typeof semanticColors;

// Brand
const brandColors = colors.brand;
type BrandColor = keyof typeof brandColors;

// Palette
const paletteColors = colors.palette;
type PaletteColor = keyof typeof paletteColors;

interface ColorPaletteProps {
  kind: BrandColor | SemanticColor | PaletteColor;
}

interface ColorProps {
  label: string;
  value: '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90' | '100';
  shade: ColorPaletteProps['kind'];
  hexCode: string;
}
const Color: React.FC<ColorProps> = ({ label, value, shade, hexCode }) => {
  const colorClass = `bg-${shade}-${value}`;

  return (
    <div className="flex flex-col text-left">
      <div className={[colorClass].join(' ')}>
        <p className="pr-16 pb-4 pl-4 font-bold">{label}</p>
      </div>
      <p className="text-xs text-pink-600">{`$${shade}-${value}`}</p>
      <p className="text-sm font-bold capitalize">{`${shade} ${value}`}</p>
      <p className="text-xs text-neutral-50">{hexCode}</p>
    </div>
  );
};

type ColorToken = Record<ColorProps['value'], { hex: string; id: string }>;

const ColorPalette: React.FC<ColorPaletteProps> = ({ kind }) => {
  let colorTokens: Partial<ColorToken>;
  switch (kind) {
    case 'primary':
    case 'neutral':
      colorTokens = brandColors[kind];
      break;

    case 'warning':
    case 'danger':
      colorTokens = semanticColors[kind];
      break;

    case 'orange':
    case 'blue':
    case 'purple':
    case 'pink':
      colorTokens = paletteColors[kind];
      break;

    default:
      throw 'Invalid color selection';
  }
  return (
    <div className="space-y-2">
      <h1 className="mt-4 text-lg font-bold capitalize">{kind}</h1>
      <div className="flex">
        {Object.keys(colorTokens).map((value) => {
          const shadeValue = value as ColorProps['value'];
          return (
            <Color
              key={`${kind}-${value}`}
              label={colorTokens[shadeValue].id}
              shade={kind}
              value={shadeValue}
              hexCode={colorTokens[shadeValue].hex}
            />
          );
        })}
      </div>
    </div>
  );
};

interface ColorPaletteListProps {
  type: ColorType;
}
const ColorPaletteList: React.FC<ColorPaletteListProps> = ({ type }) => {
  const colorKinds = Object.keys(colors[type]) as ColorPaletteProps['kind'][];
  return (
    <div className="space-y-8 divide-y divide-black">
      {colorKinds.map((kind) => (
        <ColorPalette kind={kind} key={kind} />
      ))}
    </div>
  );
};

export default {
  title: 'Design Tokens/Colors',
  parameters: {
    options: { showPanel: false },
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
    viewMode: 'story',
  },
};

export const Brand = () => <ColorPaletteList type="brand" />;
export const Semantic = () => <ColorPaletteList type="semantic" />;
export const Palette = () => <ColorPaletteList type="palette" />;
