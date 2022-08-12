import React, { FC } from "react";
import style from "./NavBar.module.css";
import Logo from "../../atoms/Logo/Logo";

type PropTypes = {
  // breadcrumb: {};
};

const NavBar: FC<PropTypes> = (props) => (
  <header className={style.NavBar}>
    <div className={style.leftContent}>
      <Logo />
      <div className={style.breadcrumbContent}>
        All Projects / PRJ-4 - Drug Substance Project
      </div>
    </div>
    <div className={style.rightContent}>Rockets R US</div>
  </header>
);

export default NavBar;
