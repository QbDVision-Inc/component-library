import { FC } from "react";
declare type Size = "small" | "medium";
declare type PropTypes = {
    size?: Size;
    type?: "light" | "dark";
};
declare const Logo: FC<PropTypes>;
export default Logo;
