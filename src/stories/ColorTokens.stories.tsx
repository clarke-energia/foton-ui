import React from 'react';
import { colors } from '../tokens.json';

const brandColors = colors.brand;

type PrimaryShadeValue = keyof typeof brandColors.primary;
interface ColorPaletteProps {
  kind: 'primary' | 'neutral';
}

interface ColorProps {
  label: string;
  value: PrimaryShadeValue;
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

const ColorPalette: React.FC<ColorPaletteProps> = ({ kind }) => {
  const colorTokens = brandColors[kind];
  return (
    <div className="space-y-2">
      <h1 className="mt-4 text-lg font-bold capitalize">{kind}</h1>
      <div className="flex">
        {Object.keys(colorTokens).map((value) => {
          const shadeValue = value as PrimaryShadeValue;
          return (
            <Color
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

const ColorPaletteList: React.FC = () => {
  return (
    <div className="space-y-8 divide-y divide-black">
      <ColorPalette kind="primary" />
      <ColorPalette kind="neutral" />
    </div>
  );
};

const colorDescription = `Colors play important role on how people feel about a brand. 
Colors evoke emotions directing the human to a response and therefore a decision making, 
that is why it is important to have a consistent and well-minded usage of colors, focusing 
on its intention. The core green color serves and the primary action color. Additional 
colors are used sparingly and purposefully.`;
export default {
  title: 'Design Tokens/Colors',
  parameters: {
    docs: {
      description: {
        component: colorDescription,
      },
    },
  },
};

export const Brand = () => <ColorPaletteList />;
