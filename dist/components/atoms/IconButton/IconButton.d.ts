import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Type } from "../Button/Button";
declare type IconButtonProps = {
    icon?: IconProp;
    iconSize?: string;
    isCircle?: boolean;
    type?: Type;
    onClick?: () => void;
    isDisabled?: boolean;
};
declare const _default: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<unknown>>;
export default _default;
