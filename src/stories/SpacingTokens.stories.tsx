import React from 'react';
import { spacing } from '../tokens.json';

export default {
  title: 'Design Tokens/Grids & Spacing/Spacing',
  parameters: {
    options: { showPanel: false },
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
    viewMode: 'story',
  },
};

interface SquareElementProps {
  spacingValue: string;
}
const SquareElement: React.FC<SquareElementProps> = ({ spacingValue }) => {
  const paddingClass = `p-${spacingValue}`;
  return (
    <div className="flex items-center mr-auto ml-4 space-x-7">
      <div className={`${paddingClass} bg-orange-10`}></div>
      <div className="flex space-x-4">
        <div className="font-mono text-pink-50">{`$spacing-${spacingValue}`}</div>
        {/* @ts-ignore */}
        <div className="text-paragraph-medium text-neutral-50">{`${spacing[spacingValue]}px`}</div>
      </div>
    </div>
  );
};

export const SpacingPalette = () => {
  return (
    <div className="flex flex-col space-y-4">
      {Object.keys(spacing).map((value) => (
        <SquareElement spacingValue={value} />
      ))}
    </div>
  );
};
SpacingPalette.storyName = 'Spacing';
