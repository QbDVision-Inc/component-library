import { FC } from "react";
declare type Size = "small" | "medium";
declare type LogoTypes = {
    size?: Size;
    type?: "light" | "dark";
};
declare const Logo: FC<LogoTypes>;
export default Logo;
