import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Spinner from "./Spinner";

export default {
  title: "Design System/Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: "blue",
  size: 24,
};
