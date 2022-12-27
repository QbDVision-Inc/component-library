import { FC } from "react";
declare type QuickAccessCardProps = {
    object: {
        count: number;
        url: string;
        icon: {
            image: string;
            width: string;
            height: string;
        };
        title: string;
    };
    className?: string;
    isLoading?: boolean;
};
/**
 * This class shows the quick access card used for Document, Suppliers and RMPs
 */
declare const QuickAccessCard: FC<QuickAccessCardProps>;
export default QuickAccessCard;
