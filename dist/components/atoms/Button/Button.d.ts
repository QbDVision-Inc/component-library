import { FC } from "react";
export declare type Type = "primary" | "secondary" | "ghost";
export declare type Size = "large" | "small";
declare type ButtonProps = {
    id?: string;
    label?: string;
    title?: string;
    type?: Type;
    size?: Size;
    disabled?: boolean;
    loading?: boolean;
    isSubmit?: boolean;
    onClick?: () => void;
};
declare const Button: FC<ButtonProps>;
export default Button;
