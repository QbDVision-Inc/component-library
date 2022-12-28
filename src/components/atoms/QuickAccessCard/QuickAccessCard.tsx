import React, { BaseSyntheticEvent, FC } from "react";
import c from "classnames";

import Card from "../Card";
import {
  addCommasToNumber,
  convertToCamelCaseId,
  pluralize,
} from "../../../utils";

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

  const generateID = `${convertToCamelCaseId(pluralize(object.title))}Link`;

  return (
    <Card withHoverEffect>
      <div
        className={`${style.quickAccessCard} ${className || ""}`}
        onClick={handleQuickAccessCardClick}
      >
        <div>
          <div
            className={c(style.quickAccessCardTitle, { skeleton: isLoading })}
          >
            {addCommasToNumber(object.count)}
          </div>
          <div className={style.quickAccessCardDetails}>
            <a
              id={generateID}
              href={object.url}
              onClick={handleQuickAccessCardClick}
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
    </Card>
  );
};

export default QuickAccessCard;
