import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavBar from "./NavBar";

export default {
  title: "Design System/Molecules/NavBar",
  component: NavBar,
  parameters: {
    layout: "full",
  },
  argTypes: {
    size: { control: "select", options: ["large", "small"] },
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
/* export const Primary = Template.bind({});
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
}; */
