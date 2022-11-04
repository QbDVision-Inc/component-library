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
    <div className={style.RecordHeader}>
      {backButtonLink && (
        <a href={backButtonLink} className={style.iconContent}>
          <FontAwesomeIcon className={style.icon} icon={faArrowLeft} />
        </a>
      )}
      <div className={style.leftContent}>
        <h3 className={style.displayName}>
          {title} {label && <span className={style.label}>{label}</span>}
        </h3>
        {breadcrumb?.length && <Breadcrumb links={breadcrumb} />}
      </div>
      {currentState && <div className={style.currentState}>{currentState}</div>}
    </div>
  );
};

export default RecordHeader;
