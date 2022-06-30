import React from 'react';

export default {
  title: 'Design Tokens/Grids & Spacing/Grid',
  parameters: {
    options: { showPanel: false },
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
    viewMode: 'story',
  },
};

const GridElement: React.FC = () => {
  return (
    <div className={`grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-6 bg-orange-10`}>
      {Array(12)
        .fill(null)
        .map((_, i) => (
          <div className="p-8 bg-orange-20">{i + 1}</div>
        ))}
    </div>
  );
};

export const Grid = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div>Change the size of the preview in the toolbar above to see the column behavior</div>
      <GridElement />
    </div>
  );
};
