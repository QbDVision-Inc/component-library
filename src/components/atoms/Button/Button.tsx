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
  disabled?: boolean;
  loading?: boolean;
  isSubmit?: boolean;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  id,
  label = "Button",
  type = "primary",
  size = "large",
  title,
  disabled,
  loading,
  isSubmit,
  onClick,
}) => (
  <div className={c(style.wrapper, { [style["wrapper-disabled"]]: disabled })}>
    <button
      id={id}
      className={c(
        style.button,
        style[`button-${type}`],
        style[`button-${size}`],
        { [style["button-disabled"]]: disabled },
        { [style["button-loading"]]: loading }
      )}
      type={isSubmit ? "submit" : "button"}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      <span>{label}</span>
      {loading && (
        <div className={style["button-spinner"]}>
          <Spinner />
        </div>
      )}
    </button>
  </div>
);
export default Button;
