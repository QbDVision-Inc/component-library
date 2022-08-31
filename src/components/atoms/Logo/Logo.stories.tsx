import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Logo from "./Logo";

export default {
  title: "Design System/Atoms/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
