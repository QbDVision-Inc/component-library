import React, { BaseSyntheticEvent, FC } from "react";
import c from "classnames";

import { addCommasToNumber, convertToCamelCaseId } from "../../../utils";

import style from "./QuickAccessCard.module.pcss";

type QuickAccessCardProps = {
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
const QuickAccessCard: FC<QuickAccessCardProps> = ({
  object,
  className,
  isLoading,
}) => {
  const handleQuickAccessCardClick = (event: Event | BaseSyntheticEvent) => {
    event.stopPropagation();
    window.open(object.url, "_self");
  };

  const generateID = `${convertToCamelCaseId(object.title)}Link`;

  return (
    <div
      onClick={handleQuickAccessCardClick}
      className={`${style.quickAccessCard} ${className || ""}`}
    >
      <div>
        <div className={c(style.quickAccessCardTitle, { skeleton: isLoading })}>
          {addCommasToNumber(object.count)}
        </div>
        <div className={style.quickAccessCardDetails}>
          <a
            id={generateID}
            onClick={handleQuickAccessCardClick}
            href={object.url}
          >
            {object.title}
          </a>
        </div>
      </div>
      <div>
        <img
          src={object.icon.image}
          width={object.icon.width}
          height={object.icon.height}
          alt={object.title}
        />
      </div>
    </div>
  );
};

export default QuickAccessCard;

/*
 * TODO
 * [] Create empty card with (shadow, border radius, hover effect) and use it in InfoCard & QuickAccessCard
 * [] use variables in css
 * [] remove unused QuickAccessCard widget from qbd + unused css styles
 * */
