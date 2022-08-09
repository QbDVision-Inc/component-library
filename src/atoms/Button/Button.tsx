import React, { FC } from "react";
import { Button as AntButton } from "antd";

import "antd/lib/button/style/index.less";

type Type = "primary" | "secondary" | "ghost";
type Size = "large" | "small";

type PropsType = {
  id?: string;
  label?: string;
  title?: string;
  type?: Type;
  size?: Size;
  disabled?: boolean;
  onClick?: () => void;
};

const remapTypeValues = (value?: Type) => {
  // remap 'secondary' & 'ghost' values to 'default' & 'text'
  if (value === "secondary") return "default";
  if (value === "ghost") return "text";

  return value;
};

const remapSizeValues = (value?: Size) => {
  // remap 'middle' value to 'large'
  if (value !== "small") return "large";

  return value;
};

const generateVerticalPadding = (value: Size) => {
  let p = "8px";

  if (value === "small") {
    p = "5px";
  }

  return {
    paddingTop: p,
    paddingBottom: p,
  };
};

const Button: FC<PropsType> = (props) => {
  const { label = "Button", type = "primary", size = "large" } = props;

  return (
    <AntButton
      {...props}
      style={{
        height: "auto",
        ...generateVerticalPadding(size),
      }}
      size={remapSizeValues(size)}
      type={remapTypeValues(type)}
    >
      {label}
    </AntButton>
  );
};

export default Button;
