import React, { FC } from "react";
import { Button as AntButton } from "antd";
import {
  generateVerticalPadding,
  remapSizeValues,
  remapTypeValues,
} from "./utils";

import "antd/lib/button/style/index.less";

export type Type = "primary" | "secondary" | "ghost";

export type Size = "large" | "small";

type ButtonProps = {
  id?: string;
  label?: string;
  title?: string;
  type?: Type;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = (props) => {
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
