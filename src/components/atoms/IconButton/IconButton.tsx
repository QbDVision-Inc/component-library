import React, { FC } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

import style from "./IconButton.module.pcss";
import buttonStyle from "../Button/Button.module.pcss";

type IconButtonProps = {
  icon?: IconProp;
  type?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  disabled?: boolean;
};

const IconButton: FC<IconButtonProps> = ({
  icon = faFileLines,
  type = "primary",
  onClick,
  disabled,
}) => {
  return (
    <div
      className={classNames(buttonStyle.wrapper, {
        [buttonStyle.wrapperDisabled]: disabled,
      })}
    >
      <button
        type="button"
        className={classNames(
          buttonStyle.button,
          {
            [buttonStyle.primary]: type === "primary",
            [buttonStyle.secondary]: type === "secondary",
            [style.iconButtonTertiary]: type === "tertiary",
            [buttonStyle.disabled]: disabled,
          },
          style.iconButton
        )}
        onClick={onClick}
        disabled={disabled}
      >
        <FontAwesomeIcon icon={icon} fontSize="18px" />
      </button>
    </div>
  );
};

export default IconButton;
