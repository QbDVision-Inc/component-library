import { FC } from "react";
declare type InfoCardProps = {
    id: string;
    icon?: string;
    alt?: string;
    data?: {
        count: {
            title: string;
            value: number;
        };
        stats: {
            id: string;
            title: string;
            count: number;
            onClick: () => void;
        }[];
    };
    onInfoCardClick?: () => void;
    isLoading?: boolean;
};
declare const InfoCard: FC<InfoCardProps>;
export default InfoCard;
