import { Meta, Story } from "@storybook/react";
import ProgressBar, { Props } from '.';

export default {
    title: 'Example/Progressbar',
    component: ProgressBar,
} as Meta;

const Template: Story<Props> = (args) => <ProgressBar {...args} ></ProgressBar>;

export const Padrao = Template.bind({});
Padrao.args = {
    value: 50
} as Props;