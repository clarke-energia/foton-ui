import Checkbox from './Checkbox';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const componentDescription = `Checkbox are used when there are multiple items for the 
user to select. It can be showed as a list, horizontal or vertical alligned and this 
list can be nested. For better user experience, use concise and clear labels and 
label the group of checkbox as well. The default state is always unselected.`;
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
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
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox',
  disabled: false,
  checked: false,
};
