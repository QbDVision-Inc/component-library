import React, { FC, ReactNode } from "react";
import { Space } from "antd";

import "antd/lib/button/style/index.less";

type PropsType = {
  children?: ReactNode;
};

const ButtonGroup: FC<PropsType> = ({ children }) => (
  <Space size={10}>{children}</Space>
);

export default ButtonGroup;
