import { FC } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
declare type IconButtonProps = {
    icon?: IconDefinition;
    type?: "primary" | "secondary" | "tertiary";
    onClick?: () => void;
    disabled?: boolean;
};
declare const IconButton: FC<IconButtonProps>;
export default IconButton;
