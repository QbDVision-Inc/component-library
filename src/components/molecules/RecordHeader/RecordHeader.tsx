import React, { FC } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import c from "classnames";
import Breadcrumb from "../../atoms/Breadcrumb/Breadcrumb";

import style from "./RecordHeader.module.css";

type RecordHeaderProps = {
  title?: string;
  breadcrumb?: { label: string; url?: string }[];
  currentState?: string;
  label?: string;
  backButtonLink?: string;
};

const RecordHeader: FC<RecordHeaderProps> = ({
  title,
  currentState,
  breadcrumb,
  label,
  backButtonLink,
}) => {
  return (
    <div
      className={c(style.RecordHeader, {
        [style.hasMinusMargin]: backButtonLink,
      })}
    >
      {backButtonLink && (
        <a href={backButtonLink}>
          <FontAwesomeIcon className={style.icon} icon={faArrowLeft} />
        </a>
      )}
      <div className={style.leftContent}>
        <div className={style.row}>
          <h3 className={style.displayName}>{title}</h3>
          {label && <span className={style.label}>{label}</span>}
        </div>
        {breadcrumb?.length && <Breadcrumb links={breadcrumb} />}
      </div>
      {currentState && <div className={style.currentState}>{currentState}</div>}
    </div>
  );
};

export default RecordHeader;
