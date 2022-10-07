import { FC } from "react";
export declare type Type = "primary" | "secondary" | "ghost";
export declare type Size = "large" | "small";
declare type ButtonProps = {
    id?: string;
    label?: string;
    title?: string;
    type?: Type;
    size?: Size;
    isDisabled?: boolean;
    isLoading?: boolean;
    isSubmit?: boolean;
    isFullWidth?: boolean;
    onClick?: (event?: any) => void;
    dataSet?: DOMStringMap;
};
declare const Button: FC<ButtonProps>;
export default Button;
