import { FC } from "react";
import { ButtonProps } from "../../atoms/Button/Button";
declare type option = {
    key: string;
    disabled: boolean;
    value: string;
};
interface DropdownButtonProps extends Omit<ButtonProps, "onClick" | "onKeyDown"> {
    label: string;
    options: option[];
    onOptionsSelect: (e: any) => void;
}
declare const DropdownButton: FC<DropdownButtonProps>;
export default DropdownButton;
