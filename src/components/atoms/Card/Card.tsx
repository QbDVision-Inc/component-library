import React, { FC, ReactNode } from "react";
import c from "classnames";

import style from "./Card.module.pcss";

type CardProps = {
  withHoverEffect?: boolean;
  children: ReactNode;
};
const Card: FC<CardProps> = ({ withHoverEffect, children }) => {
  return (
    <article
      className={c(style.card, { [style.withHoverEffect]: withHoverEffect })}
    >
      {children}
    </article>
  );
};

export default Card;
