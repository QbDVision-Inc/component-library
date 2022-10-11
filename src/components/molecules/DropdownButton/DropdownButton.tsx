import React, { FC } from "react";

import { Menu, MenuItem } from "@szhsin/react-menu";
import Button from "../../atoms/Button";
import { ButtonProps } from "../../atoms/Button/Button";

import "@szhsin/react-menu/dist/index.css";
import style from "./DropdownButton.module.pcss";

type option = {
  key: string;
  disabled: boolean;
  value: string;
};

interface DropdownButtonProps
  extends Omit<ButtonProps, "onClick" | "onKeyDown"> {
  label: string;
  options: option[];
  onOptionsSelect: (e: any) => void;
}

const DropdownButton: FC<DropdownButtonProps> = ({
  label,
  options,
  onOptionsSelect,
  ...rest
}) => {
  return (
    <Menu
      className={style.menu}
      menuClassName={style.list}
      menuButton={<Button {...rest} hasArrow label={label} />}
    >
      {options.map((item, index) => (
        <MenuItem
          className={style.item}
          key={index}
          value={item.key}
          disabled={item.disabled}
          onClick={onOptionsSelect}
        >
          {item.value}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DropdownButton;
