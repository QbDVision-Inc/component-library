import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonGroup from "./ButtonGroup";
import Button from "../../atoms/Button/Button";

export default {
  title: "Design System/Molecules/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const TwoButtons = Template.bind({});
TwoButtons.args = {
  children: (
    <>
      <Button label="Button" type="secondary" disabled />
      <Button label="Button" type="secondary" />
    </>
  ),
};

export const ThreeButtons = Template.bind({});
ThreeButtons.args = {
  children: (
    <>
      <Button label="Button" type="secondary" />
      <Button label="Button" type="secondary" />
      <Button label="Button" type="secondary" />
    </>
  ),
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
