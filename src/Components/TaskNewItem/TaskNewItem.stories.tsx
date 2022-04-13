import { Meta, Story } from "@storybook/react";
import TaskNewItem from '.';

export default {
    title: 'Example/TaskNewItem',
    component: TaskNewItem,
} as Meta;

const Template: Story = (args) => { 
    return (
        <>
            <TaskNewItem {...args} ></TaskNewItem>
        </>
    )
};

export const Padrao = Template.bind({});