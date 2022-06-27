import React from 'react';
import { border } from '../../tokens.json';

type Radius = keyof typeof border;
interface BorderProps {
  kind: Radius;
}

const Border: React.FC<BorderProps> = ({ kind }) => {
  return (
    <div className="space-y-2">
      <div className={`p-8 border-black rounded-${kind} bg-slate-300`}></div>
      <div className="font-mono text-pink-50">{`$rounded-${kind}`}</div>
      <div className="font-bold capitalize text-heading-small">{kind}</div>
      <div className="text-paragraph-medium text-neutral-50">{`${border[kind]}px`}</div>
    </div>
  );
};

const SideBorder: React.FC<BorderProps> = ({ kind }) => {
  return (
    <div className="space-y-2">
      {['t', 'r', 'l', 'b'].map((side) => (
        <React.Fragment key={`${side}-${kind}`}>
          <div className={`p-8 border-black rounded-${side}-${kind} bg-slate-300`}></div>
          <div className="font-mono text-pink-50">{`$rounded-${side}-${kind}`}</div>
        </React.Fragment>
      ))}
      <div className="font-bold capitalize text-heading-small">{kind}</div>
      <div className="text-paragraph-medium text-neutral-50">{`${border[kind]}px`}</div>
    </div>
  );
};

const CornerBorder: React.FC<BorderProps> = ({ kind }) => {
  return (
    <div className="space-y-4">
      {['tl', 'tr', 'br', 'bl'].map((corner) => (
        <React.Fragment key={`${corner}-${kind}`}>
          <div className={`p-7 border-black rounded-${corner}-${kind} bg-slate-300`}></div>
          <div className="font-mono text-pink-50">{`$rounded-${corner}-${kind}`}</div>
        </React.Fragment>
      ))}
      <div className="font-bold capitalize text-heading-small">{kind}</div>
      <div className="text-paragraph-medium text-neutral-50">{`${border[kind]}px`}</div>
    </div>
  );
};

interface BorderPaletteProps {
  type: 'all' | 'side' | 'corner';
}
const BorderPalette: React.FC<BorderPaletteProps> = ({ type }) => {
  const radii = Object.keys(border) as Radius[];
  const BorderElement = (radius: Radius, type: BorderPaletteProps['type']) => {
    switch (type) {
      case 'all':
        return <Border key={`${radius}-${type}`} kind={radius} />;

      case 'side':
        return <SideBorder key={`${radius}-${type}`} kind={radius} />;

      case 'corner':
        return <CornerBorder key={`${radius}-${type}`} kind={radius} />;

      default:
        throw 'Invalid border type';
    }
  };
  return <div className="flex space-x-4">{radii.map((radius) => BorderElement(radius, type))}</div>;
};

export default {
  title: 'Design Tokens/Borders',
  parameters: {
    options: { showPanel: false },
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
    viewMode: 'story',
  },
};

export const BorderRadius = () => <BorderPalette type="all" />;
BorderRadius.storyName = 'Border Radius (All)';

export const SideBorderRadius = () => <BorderPalette type="side" />;
SideBorderRadius.storyName = 'Border Radius (Side)';

export const CornerBorderRadius = () => <BorderPalette type="corner" />;
CornerBorderRadius.storyName = 'Border Radius (Corner)';
