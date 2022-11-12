import React, { FC } from "react";

import classNames from "classnames";
import { Menu, MenuItem } from "@szhsin/react-menu";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Button from "../../atoms/Button";
import { ButtonProps } from "../../atoms/Button/Button";
import IconButton from "../../atoms/IconButton";

import "@szhsin/react-menu/dist/index.css";
import style from "./DropdownButton.module.pcss";

type option = {
  key: string;
  disabled?: boolean;
  value: string;
};

interface DropdownButtonProps
  extends Omit<ButtonProps, "onClick" | "onKeyDown"> {
  id?: string;
  label: string;
  options: option[];
  onOptionsSelect: (e: any) => void;
  isIcon?: boolean;
}

const DropdownButton: FC<DropdownButtonProps> = ({
  id,
  label,
  options,
  onOptionsSelect,
  isIcon,
  ...rest
}) => {
  return (
    <div className={classNames([style.dropdown, { [style.isIcon]: isIcon }])}>
      <Menu
        className={style.menu}
        menuClassName={style.list}
        menuButton={
          isIcon ? (
            <IconButton icon={faEllipsisVertical} {...rest} type="ghost" />
          ) : (
            <Button {...rest} label={label} hasArrow />
          )
        }
      >
        {options.map((item) => (
          <MenuItem
            {...(id && { id: `${id}_${item.key}` })}
            className={style.item}
            key={item.key}
            value={item.key}
            disabled={item.disabled}
            onClick={(e) => onOptionsSelect(e.syntheticEvent)}
          >
            {item.value}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropdownButton;
