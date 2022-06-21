import { ComponentMeta, Story } from '@storybook/react';
import Color from './Color';

export default {
  title: 'Design Tokens/Colors',
  parameters: {
    docs: {
      description: { component: 'Some generic description' },
    },
  },
};

export const ColorTokens: Story = () => {
  return <Color label="Red" value="blue" />;
};
