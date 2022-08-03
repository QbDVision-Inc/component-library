import React from "react";
import {Button as AntButton, ButtonProps} from "antd";
import "antd/lib/button/style/index.less";

type PropsType = Omit<ButtonProps, "style" | "className"> & { "label": String};

const Button = (props: PropsType) => {
  return (
    <AntButton {...props}
               size="middle" >
      {props.label}
    </AntButton>
  );
};

export default Button;
