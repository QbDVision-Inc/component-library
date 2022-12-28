import React, { FC } from "react";
import c from "classnames";

import Card from "../Card";
import { addCommasToNumber } from "../../../utils";

import style from "./InfoCard.module.pcss";

type InfoCardProps = {
  id: string;
  icon?: string;
  alt?: string;
  data?: {
    count: { title: string; value: number };
    stats: { id: string; title: string; count: number; onClick: () => void }[];
  };
  onInfoCardClick?: () => void;
  isLoading?: boolean;
};

const InfoCard: FC<InfoCardProps> = ({
  id,
  icon,
  alt,
  data,
  onInfoCardClick,
  isLoading,
}) => {
  return (
    <Card>
      <div
        id={`${id}InfoCard`}
        className={style.infoCard}
        role="presentation"
        onClick={onInfoCardClick}
      >
        <div>
          <img src={icon} className={style.icon} alt={alt} />
        </div>
        <div className={c(style.count, { skeleton: isLoading })}>
          {addCommasToNumber(data?.count?.value)}
        </div>
        <div className={style.title}>
          <a id={`${id}Link`} onClick={onInfoCardClick}>
            {data?.count?.title}
          </a>
        </div>
        <div className={style.line} />
        {data?.stats?.map((instance) => {
          return (
            <div
              role="presentation"
              key={instance.id}
              id={instance.id}
              className={style.detailsLine}
              onClick={instance.onClick}
            >
              <div className={style.detailsLineTitle}>{instance.title}</div>
              <div
                className={c(style.detailsLineValue, { skeleton: isLoading })}
              >
                {addCommasToNumber(instance.count)}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default InfoCard;
