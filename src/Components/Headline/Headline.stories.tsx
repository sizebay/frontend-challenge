import { Meta, Story } from "@storybook/react";
import Headline, { Props } from '.';

export default {
    title: 'Example/Headline',
    component: Headline,
} as Meta;

const Template: Story<Props> = (args) => <Headline {...args} >Headline</Headline>;

export const Headline1 = Template.bind({});
Headline1.args = {
    size: 1
} as Props;

export const Headline2 = Template.bind({});
Headline2.args = {
    size: 2
} as Props;

export const Headline3 = Template.bind({});
Headline3.args = {
    size: 3
} as Props;

export const Headline4 = Template.bind({});
Headline4.args = {
    size: 4
} as Props;

export const Headline5 = Template.bind({});
Headline5.args = {
    size: 5
} as Props;

export const Headline6 = Template.bind({});
Headline6.args = {
    size: 6
} as Props;