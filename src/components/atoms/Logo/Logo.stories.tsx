import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// eslint-disable-next-line import/extensions
import { colors } from "../../../design-tokens/design-tokens.json";

import Logo from "./Logo";

const darkStyle = {
  backgroundColor: colors.basic.blue["primary-blue"].value,
  padding: "60px",
};
export default {
  title: "Design System/Atoms/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => {
  const { type } = args;

  return (
    <div style={{ ...(type === "dark" && darkStyle) }}>
      <Logo {...args} />
    </div>
  );
};

export const Default = Template.bind({});
