import React, { FC, ReactNode } from "react";
import style from "./ButtonGroup.module.pcss";

export type ButtonGroupProps = {
  children?: ReactNode;
};

const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => (
  <div className={style.buttonGroup}>{children}</div>
);

export default ButtonGroup;
