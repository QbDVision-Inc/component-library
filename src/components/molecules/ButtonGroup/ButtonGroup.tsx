import React, { FC, ReactNode } from "react";

export type ButtonGroupProps = {
  children?: ReactNode;
};

const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => (
  <div>{children}</div>
);

export default ButtonGroup;
