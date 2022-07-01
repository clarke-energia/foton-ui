import TextInput from './TextInput';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const componentDescription = `Text Inputs is one of many types of form fields. 
It is used to collect content and data from users. These form fields must be 
crystal clear on what is needs for better user experience. It is made of Label, 
Placeholder Text and Helper. All the elements existis to inform and help the 
user to enter the right information. In addition there are also different 
states to give improve usability and feedback responses.`;
export default {
  title: 'Components/Text Input',
  component: TextInput,
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
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  disabled: false,
  placeholder: 'Placeholder Text',
  error: false,
  helper: '',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Label',
  disabled: false,
  placeholder: 'Placeholder Text',
  value: 'Invalid Text',
  error: true,
  helper: 'Error message',
};
