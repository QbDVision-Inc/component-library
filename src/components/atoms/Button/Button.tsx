import React, { FC, forwardRef, ReactNode } from "react";
import c from "classnames";
import Spinner from "../Spinner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import style from "./Button.module.pcss";

export type Type = "primary" | "secondary" | "ghost";

export type Size = "large" | "small";

export type ButtonProps = {
  id?: string;
  label?: string;
  title?: string;
  type?: Type;
  size?: Size;
  hasArrow?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isSubmit?: boolean;
  isFullWidth?: boolean;
  onClick?: (event?: any) => void;
  dataSet?: DOMStringMap;
  children?: ReactNode;
};

const Button: FC<ButtonProps> = (
  {
    id,
    label = "Button",
    type = "primary",
    size = "large",
    hasArrow,
    title,
    isDisabled,
    isLoading,
    isSubmit,
    isFullWidth,
    onClick,
    children,
    ...dataSet
  },
  ref
) => {
  return (
    <button
      {...dataSet}
      id={id}
      className={c(
        style.button,
        style[`${type}`],
        style[`${size}`],
        { [style.disabled]: isDisabled },
        { [style.loading]: isLoading },
        { [style.fullwidth]: isFullWidth }
      )}
      type={isSubmit ? "submit" : "button"}
      disabled={isDisabled}
      title={title}
      ref={ref}
      onClick={onClick}
    >
      {children || <span>{label}</span>}
      {isLoading && (
        <div className={style.spinner}>
          <Spinner {...(type !== "primary" && { color: "blue" })} />
        </div>
      )}
      {hasArrow && (
        <FontAwesomeIcon
          className={style.icon}
          style={{ marginLeft: "10px" }}
          icon={faCaretDown}
          fontSize="12px"
        />
      )}
    </button>
  );
};

// @ts-ignore
export default forwardRef(Button);
