import { FC } from "react";
export declare type Type = "primary" | "secondary" | "ghost";
export declare type Size = "large" | "small";
declare type LinkProps = {
    id?: string;
    label?: string;
    href?: string;
    title?: string;
    disabled?: boolean;
    isExternal?: boolean;
};
declare const Link: FC<LinkProps>;
export default Link;
