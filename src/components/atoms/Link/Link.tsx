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
  isDisabled?: boolean;
  isExternal?: boolean;
};

const Link: FC<LinkProps> = ({
  id,
  label,
  href,
  isExternal,
  title,
  isDisabled,
}) => (
  <a
    id={id}
    href={isDisabled ? "#" : href}
    className={c(style.link, { [style.linkDisabled]: isDisabled })}
    title={title}
    rel="noopener noreferrer"
    {...(isExternal && { target: "_blank" })}
  >
    <span className={style.label}>{label}</span>
    {isExternal && <FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
  </a>
);
export default Link;
