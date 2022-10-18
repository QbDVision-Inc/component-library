import React, { FC } from "react";
import c from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

import style from "./IconButton.module.pcss";
import Button from "../Button";
import { Type } from "../Button/Button";

type IconButtonProps = {
  icon?: IconProp;
  iconSize?: string;
  isCircle?: boolean;
  type?: Type;
  onClick?: () => void;
  isDisabled?: boolean;
};

const IconButton: FC<IconButtonProps> = (
  {
    icon = faFileLines,
    iconSize = "18px",
    type = "primary",
    onClick,
    isCircle,
    isDisabled,
  },
  ref
) => {
  return (
    <div
      className={c(style.wrapper, {
        [style.isCircle]: isCircle,
      })}
    >
      <Button
        type={type}
        onClick={onClick}
        isDisabled={isDisabled}
        ref={ref}
        isFullWidth
      >
        <FontAwesomeIcon icon={icon} fontSize={iconSize} />
      </Button>
    </div>
  );
};

// @ts-ignore
export default React.forwardRef(IconButton);
