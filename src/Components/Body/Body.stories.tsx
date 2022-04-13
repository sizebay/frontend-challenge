import { Meta, Story } from "@storybook/react";
import Body, { Props } from '.';

export default {
    title: 'Example/Body',
    component: Body,
} as Meta;

const Template: Story<Props> = (args) => <Body {...args} >Healine</Body>;

export const Normal = Template.bind({});
Normal.args = {} as Props;

export const Bolder = Template.bind({});
Bolder.args = {
    variant: 'bolder'
} as Props;