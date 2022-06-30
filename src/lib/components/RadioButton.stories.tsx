import RadioButton from './RadioButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const componentDescription = `Radio Buttons are used when you have a list of mutually 
exclusive choices and only one option is allowed. It can come as a list horizontal 
or vertically alligned. For better user experience, use concise and clear labels 
and label the group of checkbox as well. The default state is having at least one 
radio button preselected. When the user chooses a new option, the preview item is 
automatically deselected.`;
export default {
  title: 'Components/Radio Button',
  component: RadioButton,
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
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Radio button item',
  disabled: false,
  checked: false,
};
