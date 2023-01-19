import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AiOutlineAccountBook } from 'react-icons/ai';

import Task from '../components/Task';

export default {
  title: 'Example/Task',
  component: Task,
  argTypes: {
    content: {control: 'text'}
  }
} as ComponentMeta<typeof Task>;

const Template = (args: any) => <Task {...args} />;

export const Default: ComponentStory<typeof Task> = Template.bind({});

Default.args = {
  content: 'Click Me'
};

