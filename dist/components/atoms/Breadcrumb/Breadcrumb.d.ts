import { FC } from "react";
import Link from "../Link";
declare type Link = {
    label: string;
    url?: string;
};
declare type BreadcrumbProps = {
    links: Link[];
    hasSeparator?: boolean;
};
declare const Breadcrumb: FC<BreadcrumbProps>;
export default Breadcrumb;
