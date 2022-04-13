import { Meta, Story } from "@storybook/react";
import DateHeader from '.';

export default {
    title: 'Example/DateHeader',
    component: DateHeader,
} as Meta;

const Template: Story = (args) => <DateHeader {...args} ></DateHeader>;

export const Padrao = Template.bind({});