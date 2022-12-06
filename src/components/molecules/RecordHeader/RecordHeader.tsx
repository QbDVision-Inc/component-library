import React, { FC } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import c from "classnames";
import Breadcrumb from "../../atoms/Breadcrumb/Breadcrumb";

import style from "./RecordHeader.module.pcss";

type RecordHeaderProps = {
  title?: string;
  breadcrumb?: { label: string; url?: string }[];
  currentState?: string;
  label?: string;
  backButtonLink?: string;
  isTitleGray?: boolean;
};

const RecordHeader: FC<RecordHeaderProps> = ({
  title,
  currentState,
  breadcrumb,
  label,
  backButtonLink,
  isTitleGray,
}) => {
  return (
    <div className={style.RecordHeader}>
      {backButtonLink && (
        <a href={backButtonLink} className={style.backButtonLink}>
          <FontAwesomeIcon className={style.icon} icon={faArrowLeft} />
        </a>
      )}
      <div className={style.leftContent}>
        <div className={style.row}>
          <h3 className={c(style.displayName, { [style.isGray]: isTitleGray })}>
            {title}
          </h3>
          {label && <span className={style.label}>{label}</span>}
        </div>
        {breadcrumb?.length && <Breadcrumb links={breadcrumb} />}
      </div>
      {currentState && <div className={style.currentState}>{currentState}</div>}
    </div>
  );
};

export default RecordHeader;
