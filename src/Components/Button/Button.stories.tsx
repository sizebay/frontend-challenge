import { Meta, Story } from "@storybook/react";
import Button, { Props } from '.';

export default {
    title: 'Example/Button',
    component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} >Click</Button>;

export const Padrao = Template.bind({});
Padrao.args = {
    isActive: false
} as Props;