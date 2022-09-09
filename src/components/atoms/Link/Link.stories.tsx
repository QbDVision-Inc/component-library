import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Link from "./Link";

export default {
  title: "Design System/Atoms/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Link",
  href: "#",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Link",
  href: "#",
  isExternal: true,
};
