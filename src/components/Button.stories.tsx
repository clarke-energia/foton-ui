import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Interact with mouse (`hover`, `click`, `click-and-hold`, etc) to see the buttons behaviors',
      },
    },
  },
  argTypes: {
    kind: {
      options: ['primary', 'secondary', 'chip', 'ghost'],
      control: { type: 'radio' },
    },
    disabled: {
      defaultValue: false,
    },
    icon: {
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Main',
  kind: 'primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Main',
  kind: 'secondary',
  disabled: false,
};

export const Chip = Template.bind({});
Chip.args = {
  label: 'Main',
  kind: 'chip',
  disabled: false,
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: 'Main',
  kind: 'ghost',
  disabled: false,
};
