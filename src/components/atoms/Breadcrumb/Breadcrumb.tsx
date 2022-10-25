import React, { FC } from "react";
import c from "classnames";
import Link from "../Link";

import style from "./Breadcrumb.module.pcss";

type Link = { label: string; url?: string };

type BreadcrumbProps = {
  links: Link[];
  hasSeparator?: boolean;
};

const Breadcrumb: FC<BreadcrumbProps> = ({ links, hasSeparator }) => {
  return (
    <>
      {links.map((item, index) => (
        <div
          key={item.label + item.url}
          className={c(style.wrapper, {
            [style.wrapperHasMargin]: !hasSeparator,
          })}
        >
          {index !== 0 && hasSeparator && <span>{" / "}</span>}
          <Link href={item.url} label={item.label} />
        </div>
      ))}
    </>
  );
};

export default Breadcrumb;
