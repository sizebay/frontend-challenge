import { Meta, Story } from "@storybook/react";
import TaskItem, { Props } from '.';

export default {
    title: 'Example/TaskItem',
    component: TaskItem,
} as Meta;

const Template: Story<Props> = (args) => { 
    return (
        <>
            <TaskItem {...args} ></TaskItem>
            <TaskItem {...args} ></TaskItem>
        </>
    )
};

export const Padrao = Template.bind({});
Padrao.args = {
    task: {status: 'pending', description: 'Task 1', id: '1'}
} as Props;