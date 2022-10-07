import React, { FC } from "react";
import tokens from "../../../../design-tokens.json";

import style from "./Spinner.module.css";

type SpinnerProps = {
  color?: "white" | "blue";
  size?: number;
};

const Spinner: FC<SpinnerProps> = ({ color, size = 24 }) => (
  <svg
    className={style.spinner}
    fill={
      color === "blue"
        ? tokens["custom-properties"]["--color-blue-primary"]
        : tokens["custom-properties"]["--color-white"]
    }
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2159_30943)">
      <path d="M13.3125 6.0625C13.3125 5.35156 12.7109 4.75 12 4.75C11.2617 4.75 10.6875 5.35156 10.6875 6.0625C10.6875 6.80078 11.2617 7.375 12 7.375C12.7109 7.375 13.3125 6.80078 13.3125 6.0625ZM12 16.125C11.2617 16.125 10.6875 16.7266 10.6875 17.4375C10.6875 18.1758 11.2617 18.75 12 18.75C12.7109 18.75 13.3125 18.1758 13.3125 17.4375C13.3125 16.7266 12.7109 16.125 12 16.125ZM17.6875 10.4375C16.9492 10.4375 16.375 11.0391 16.375 11.75C16.375 12.4883 16.9492 13.0625 17.6875 13.0625C18.3984 13.0625 19 12.4883 19 11.75C19 11.0391 18.3984 10.4375 17.6875 10.4375ZM7.625 11.75C7.625 11.0391 7.02344 10.4375 6.3125 10.4375C5.57422 10.4375 5 11.0391 5 11.75C5 12.4883 5.57422 13.0625 6.3125 13.0625C7.02344 13.0625 7.625 12.4883 7.625 11.75ZM7.95312 14.4844C7.24219 14.4844 6.64062 15.0586 6.64062 15.7969C6.64062 16.5078 7.24219 17.1094 7.95312 17.1094C8.69141 17.1094 9.26562 16.5078 9.26562 15.7969C9.26562 15.0586 8.69141 14.4844 7.95312 14.4844ZM16.0195 14.4844C15.2812 14.4844 14.707 15.0586 14.707 15.7969C14.707 16.5078 15.2812 17.1094 16.0195 17.1094C16.7305 17.1094 17.332 16.5078 17.332 15.7969C17.332 15.0586 16.7305 14.4844 16.0195 14.4844ZM7.95312 6.41797C7.24219 6.41797 6.64062 7.01953 6.64062 7.73047C6.64062 8.46875 7.24219 9.04297 7.95312 9.04297C8.69141 9.04297 9.26562 8.46875 9.26562 7.73047C9.26562 7.01953 8.69141 6.41797 7.95312 6.41797Z" />
    </g>
    <defs>
      <clipPath id="clip0_2159_30943">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Spinner;
