import React, { FC } from "react";
import logo from "../../../assets/logo.svg";
import darkLogo from "./logo-dark.svg";

type Size = "small" | "medium";

type PropTypes = {
  size?: Size;
  type?: "light" | "dark";
};

const generateSize = (value: Size) => {
  switch (value) {
    case "small":
      return "20px";
    case "medium":
      return "32px";
    default:
      return "32px";
  }
};

const Logo: FC<PropTypes> = ({ size = "medium", type = "light" }) => (
  <>
    52
    <img
      height={generateSize(size)}
      src={type === "dark" ? darkLogo : logo}
      alt="QbDVision Logo"
    />
  </>
);

export default Logo;
