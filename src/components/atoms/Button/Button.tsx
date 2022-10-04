import React, { FC } from "react";
import c from "classnames";
import Spinner from "../Spinner";

import style from "./Button.module.pcss";

export type Type = "primary" | "secondary" | "ghost";

export type Size = "large" | "small";

type ButtonProps = {
  id?: string;
  label?: string;
  title?: string;
  type?: Type;
  size?: Size;
  isDisabled?: boolean;
  isLoading?: boolean;
  isSubmit?: boolean;
  isFullWidth?: boolean;
  onClick?: (event?: any) => void;
};

const Button: FC<ButtonProps> = ({
  id,
  label = "Button",
  type = "primary",
  size = "large",
  title,
  isDisabled,
  isLoading,
  isSubmit,
  isFullWidth,
  onClick,
}) => (
  <button
    id={id}
    className={c(
      style.button,
      style[`button-${type}`],
      style[`button-${size}`],
      { [style["button-disabled"]]: isDisabled },
      { [style["button-loading"]]: isLoading },
      { [style["button-fullwidth"]]: isFullWidth }
    )}
    type={isSubmit ? "submit" : "button"}
    onClick={onClick}
    disabled={isDisabled}
    title={title}
  >
    <span>{label}</span>
    {isLoading && (
      <div className={style["button-spinner"]}>
        <Spinner {...(type !== "primary" && { color: "blue" })} />
      </div>
    )}
  </button>
);
export default Button;
