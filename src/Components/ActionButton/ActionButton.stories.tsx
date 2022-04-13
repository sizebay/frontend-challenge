import { Meta, Story } from "@storybook/react";
import ActionButton, { Props } from '.';

export default {
    title: 'Example/ActionButton',
    component: ActionButton,
} as Meta;

const Template: Story<Props> = (args) => <ActionButton {...args} ></ActionButton>;

export const Save = Template.bind({});
Save.args = {
    variant: 'save',
    enabled: true
} as Props;

export const Delete = Template.bind({});
Delete.args = {
    variant: 'delete',
    enabled: true
} as Props;

export const Create = Template.bind({});
Create.args = {
    variant: 'create',
    enabled: true
} as Props;