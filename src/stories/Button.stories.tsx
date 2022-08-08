import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../atoms/Button/Button";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: ["large", "small"] },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  size: "large",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  type: "secondary",
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: "Button",
  type: "ghost",
};

/*
export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
*/
