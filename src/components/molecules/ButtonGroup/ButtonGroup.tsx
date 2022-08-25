import React, { FC, ReactNode } from "react";
import { Space } from "antd";

import "antd/lib/space/style/index.less";

export type ButtonGroupProps = {
  children?: ReactNode;
};

const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => (
  <Space size={10}>{children}</Space>
);

export default ButtonGroup;
