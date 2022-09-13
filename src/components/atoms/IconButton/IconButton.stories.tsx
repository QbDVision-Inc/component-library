import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconButton from "./IconButton";

export default {
  title: "Design System/Atoms/Icon Button",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: ["large", "small"] },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Primary = Template.bind({});
