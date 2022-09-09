import React, { FC } from "react";
import c from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import style from "./Link.module.pcss";

export type Type = "primary" | "secondary" | "ghost";

export type Size = "large" | "small";

type LinkProps = {
  id?: string;
  label?: string;
  href?: string;
  title?: string;
  disabled?: boolean;
  isExternal?: boolean;
};

const Link: FC<LinkProps> = ({
  id,
  label,
  href,
  isExternal,
  title,
  disabled,
}) => (
  <div className={c(style.wrapper, { [style["wrapper-disabled"]]: disabled })}>
    <a
      id={id}
      href={href}
      className={c(style.link, { [style["button-disabled"]]: disabled })}
      title={title}
      rel="noopener noreferrer"
      {...(isExternal && { target: "_blank" })}
    >
      <span className={style.label}>{label}</span>
      {isExternal && <FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
    </a>
  </div>
);
export default Link;
