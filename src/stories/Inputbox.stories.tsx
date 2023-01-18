import { ComponentStory, ComponentMeta } from '@storybook/react';
import {AiOutlineSearch} from 'react-icons/ai';

import Inputbox from '../components/Inputbox';

export default {
  title: 'Example/Inputbox',
  component: Inputbox,
  argTypes: {
    icon: { control: false },
    iconColor: { control: 'color' },
  },
} as ComponentMeta<typeof Inputbox>;

const Template = (args: any) => <Inputbox {...args} />;

export const Default: ComponentStory<typeof Inputbox> = Template.bind({});

Default.args = {
  text: 'Search items'
};

export const WithBoldText: ComponentStory<typeof Inputbox> = Template.bind({});

WithBoldText.args = {
  ...Default.args,
  bold: true,
};

export const WithIcon: ComponentStory<typeof Inputbox> = Template.bind({});

WithIcon.args = {
  ...Default.args,
  icon: <AiOutlineSearch/>
};

export const WithIconAndColor: ComponentStory<typeof Inputbox> = Template.bind({});

WithIconAndColor.args = {
  ...WithIcon.args,
  iconColor: '#4f4fef'
};

export const WithIconAndBackground: ComponentStory<typeof Inputbox> = Template.bind({});

WithIconAndBackground.args = {
  ...WithIcon.args,
  iconColor: '#FFF',
  iconBg: true
};