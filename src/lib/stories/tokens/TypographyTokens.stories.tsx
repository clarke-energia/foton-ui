import React from 'react';
import { typography } from '../../tokens.json';

type FontSize = 'small' | 'medium' | 'large';
type FontWeights = 'normal' | 'bold' | 'black';
const WEIGHTS: FontWeights[] = ['normal', 'bold', 'black'];

interface TypographyListProps {
  type: keyof typeof typography;
}
const TypographyList: React.FC<TypographyListProps> = ({ type }) => {
  const sizes = Object.keys(typography[type]).filter((key) => key !== 'fontFamily') as FontSize[];
  return (
    <table className="mx-auto border-black table-auto border-y">
      <thead>
        <tr>
          <th className="text-4xl font-normal capitalize text-start">{type}</th>
        </tr>
        <tr className="border-black border-y">
          <th className="p-2 font-medium text-start">Example</th>
          <th className="p-2 font-medium text-start">Token</th>
          <th className="p-2 font-medium text-start">Font Family</th>
          <th className="p-2 font-medium text-start">Font Size</th>
          <th className="p-2 font-medium text-start">Line Height</th>
          <th className="p-2 font-medium text-start">Weight</th>
        </tr>
      </thead>
      <tbody>
        {sizes.map((size) =>
          WEIGHTS.map((weight) => (
            <tr key={`${type}-${size}-${weight}`} className="border-b border-black">
              <td className={`capitalize font-${weight} text-${type}-${size}`}>{`${type} ${size}`}</td>
              <td className="font-mono text-pink-50">{`$text-${type}-${size} $font-${weight}`}</td>
              <td className="text-center">Inter</td>
              {/* @ts-ignore */}
              <td className="text-center">{`${typography[type][size].fontSize}px`}</td>
              {/* @ts-ignore */}
              <td className="text-center">{`${typography[type][size].lineHeight}px`}</td>
              <td className="capitalize">{weight}</td>
            </tr>
          )),
        )}
      </tbody>
    </table>
  );
};

export default {
  title: 'Design Tokens/Typography',
  parameters: {
    options: { showPanel: false },
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
    viewMode: 'story',
  },
};

export const Caption = () => <TypographyList type="caption" />;
export const Paragraph = () => <TypographyList type="paragraph" />;
export const Heading = () => <TypographyList type="heading" />;
export const Display = () => <TypographyList type="display" />;
