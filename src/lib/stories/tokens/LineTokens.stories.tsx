import React from 'react';
import { line } from '../../tokens.json';

export default {
  title: 'Design Tokens/Lines',
  parameters: {
    options: { showPanel: false },
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
    viewMode: 'story',
  },
};

interface LineProps {
  type: keyof typeof line;
}

const Line: React.FC<LineProps> = ({ type }) => {
  const width = line[type];
  const borderClass = width === 1 ? 'border-b' : `border-b-${width}`;
  return (
    <div className="space-y-2">
      <div className={`${borderClass} border-black`}> </div>
      <div className="font-mono text-pink-50">{`$${borderClass}`}</div>
      <div className="font-bold capitalize text-heading-small">{type}</div>
      <div className="text-paragraph-medium text-neutral-50">{`${width}px`}</div>
    </div>
  );
};
const StrokePalette: React.FC = () => {
  const types = ['none', 'hairline', 'thin'] as LineProps['type'][];
  return (
    <div className="flex space-x-2">
      {types.map((type) => (
        <Line type={type} />
      ))}
    </div>
  );
};

export const Strokes = () => <StrokePalette />;
