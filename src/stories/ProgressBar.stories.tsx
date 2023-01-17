import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressBar from '../components/ProgressBar';

export default {
  title: 'Example/ProgressBar',
  component: ProgressBar
} as ComponentMeta<typeof ProgressBar>;

const Template = (args: any) => <ProgressBar {...args} />;

export const Default: ComponentStory<typeof ProgressBar> = Template.bind({});

export const Half: ComponentStory<typeof ProgressBar> = Template.bind({});

Half.args = {
  allTasks: 100,
  completedTasks: 50,
};

export const Completed: ComponentStory<typeof ProgressBar> = Template.bind({});

Completed.args = {
  allTasks: 100,
  completedTasks: 100,
};