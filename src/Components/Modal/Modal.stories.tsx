import { Meta, Story } from "@storybook/react";
import Headline from "../Headline";
import Modal, { Props } from '.';

export default {
    title: 'Example/Modal',
    component: Modal,
} as Meta;

const Template: Story<Props> = (args) => <Modal><Headline size={1}>07</Headline></Modal>;

export const Padrao = Template.bind({});
Padrao.args = {} as Props;