import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AiOutlineAccountBook } from 'react-icons/ai';

import ActionButton from '../components/ActionButton';

export default {
  title: 'Example/ActionButton',
  component: ActionButton,
  argTypes: {
    icon: { control: false },
    bg: { control: 'color' },
    color: { control: 'color' }
  }
} as ComponentMeta<typeof ActionButton>;

const Template = (args: any) => <ActionButton {...args} />;

export const Default: ComponentStory<typeof ActionButton> = Template.bind({});

Default.args = {
  icon: <AiOutlineAccountBook />
};

export const WithBackground: ComponentStory<typeof ActionButton> = Template.bind({});

WithBackground.args = {
  ...Default.args,
  bg: '#f99999'
};

export const WithIconColor: ComponentStory<typeof ActionButton> = Template.bind({});

WithIconColor.args = {
  ...WithBackground.args,
  color: '#FFF'
};