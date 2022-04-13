import { Meta, Story } from "@storybook/react";
import Input from '.';

export default {
    title: 'Example/SearchInput',
    component: Input,
} as Meta;

const Template: Story = (args) => <Input {...args} ></Input>;

export const Padrao = Template.bind({});