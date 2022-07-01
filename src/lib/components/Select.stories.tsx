import Select from './Select';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const componentDescription = `Select component is like Text Input component but 
used to select one options from a list. It is used in forms for users to submit 
and select data. It is made of Label, Placeholder Text, Helper and the Options. 
It is encouraged to organize the options by alphabetical order or numerical 
order or by frequence of use. Attention: the appearance of the option list will 
be determined by the browser and operational system being used.`;
export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    disabled: {
      defaultValue: false,
    },
    options: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
const optionsDemo = [
  { value: '', display: 'Option 1' },
  { value: '', display: 'Option 2' },
  { value: '', display: 'Option 3' },
];
Default.args = {
  label: 'Select label',
  options: optionsDemo,
  placeholderText: 'Select an option...',
  disabled: false,
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Select label',
  options: optionsDemo,
  placeholderText: 'Select an option...',
  disabled: false,
  error: true,
};
