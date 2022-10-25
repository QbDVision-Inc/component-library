import { FC } from "react";
declare type RecordHeaderProps = {
    title?: string;
    breadcrumb?: {
        label: string;
        url?: string;
    }[];
    currentState?: string;
    label?: string;
    backButtonLink?: string;
};
declare const RecordHeader: FC<RecordHeaderProps>;
export default RecordHeader;
