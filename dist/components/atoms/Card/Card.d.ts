import { FC, ReactNode } from "react";
declare type CardProps = {
    withHoverEffect?: boolean;
    children: ReactNode;
};
declare const Card: FC<CardProps>;
export default Card;
