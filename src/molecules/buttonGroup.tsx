import React, {FC, ReactNode} from "react";
import "antd/lib/button/style/index.less";
import styles from "./buttonGroup.module.css";

type PropsType = {
  children: ReactNode,
};

const ButtonGroup:FC<PropsType> = ({children}) => {
  return (
    <div className={styles.buttonGroup}>
      {children}
    </div>
  );
};

export default ButtonGroup;
