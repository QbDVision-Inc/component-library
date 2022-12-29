(function(){"use strict";try{if(typeof document!="undefined"){var n=document.createElement("style");n.appendChild(document.createTextNode(`.spinner___T62Mn {
  animation: spin___On2jd linear 2s infinite;
}

@keyframes spin___On2jd {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.button___o4Lfp {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  height: 36px;
  font-size: 14px;
  color: #FFFFFF;
  border-radius: 4px;
  transition: .3s;
  background: transparent;
  user-select: none;
  font-weight: 600;
  font-family: "Open Sans", Arial, sans-serif;
  cursor: pointer;
}


  .button___o4Lfp:hover:not(:disabled) {
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.2);
  }

.primary___pfqbx {
  background-color: #1F46A1;
}

.secondary___pQL01 {
  border: 1px solid #1F46A1;
  color: #1F46A1;
  background-color: #FFFFFF;
}

.ghost___TnsO6 {
  color: #1F46A1;
}

.ghost___TnsO6:hover{
    border: 1px solid #1F46A1;
    box-shadow: none;
  }

.ghost___TnsO6:active {
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.2);
  }

.large___zaoE3 {
  height: 36px;
  padding: 0 16px;
}

.small___dHbw9 {
  height: 30px;
  padding: 0 16px;
}

.disabled___2mTHA {
  filter: grayscale(1);
  opacity: .3;
  cursor: not-allowed;
}

.spinner___k4QJT {
  position: absolute;
  display: flex;
}

.loading___GEpQi {
  pointer-events: none;
}

.loading___GEpQi span {
    opacity: 0;
  }

.fullWidth___8GO-B {
  width: 100%;
}

.fullHeight___KqYnw {
  height: 100%;
}

.icon___m-HKy {
  margin-left: 10px;
}
.wrapper___HNzWL {
  width: 36px;
  height: 36px;
}

  .wrapper___HNzWL svg {
    margin: 0;
  }

.ghost___CfQAc {
  border-color: #C0C6CC;
  color: #859099;
}

.isCircle___o1G-u button{
    border-radius: 50%;
  }
.link___Ey28k {
  font-size: 14px;
  font-family: "Open Sans", Arial, sans-serif;
  color: #434952;
  font-weight: 400;
  text-decoration: none;
}

  .link___Ey28k:link, .link___Ey28k:visited {
    position: relative;
    color: #1F46A1;
    background: transparent;
    transition: .3s;
    text-decoration: none;
    font-weight: 600;
  }

  .link___Ey28k:link::after, .link___Ey28k:visited::after {
      content: "";
      transition: all .3s;
    }

  .link___Ey28k:hover:not(.link-disabled___Hk7Kr)::after, .link___Ey28k:active:not(.link-disabled___Hk7Kr)::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      display: inline-block;
      width: 100%;
      height: 1px;
      background: #1F46A1;
      text-decoration: underline;
    }

  .link___Ey28k:hover:not([href]) {
    text-decoration: none;
    color: #434952;
    cursor: default;
  }

  .link___Ey28k:hover:not([href])::after {
      display: none;
    }

  .link-disabled___Hk7Kr {
    filter: grayscale(1);
    opacity: .3;
    cursor: not-allowed;
  }

  .link___Ey28k svg {
    margin-left: 10px;
  }
.card___Tv0v- {
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  transition: .3s;
}

  .card___Tv0v- * {
    box-sizing: border-box;
  }

  .card___Tv0v-.withHoverEffect___n7-60 {
    cursor: pointer;
  }

  .card___Tv0v-.withHoverEffect___n7-60:hover {
      background-color: #F0F3F5;
    }
.button-group___zQdnW {
  display: flex;
  margin-right: -1px;
}

  .button-group___zQdnW > button:not(:last-child) {
    margin-right: 10px;
  }
.dropdown___PscgQ {
  display: inline-block;
}

  .dropdown___PscgQ.isIcon___RptAc [type="button"]:hover,.dropdown___PscgQ.isIcon___RptAc:focus-within [type="button"] {
    border: 1px solid #859099;
    background-color: #F0F3F5;
    box-shadow: none;
  }

  .dropdown___PscgQ.isIcon___RptAc [data-icon="ellipsis-vertical"] {
    color: #859099;
  }

.menu___RcKEp {
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 14px;
}

.list___KTdJj {
  border: 1px solid #1F46A1;
  box-shadow: 0px 3px 4px rgba(192, 198, 204, 0.14), 0px 3px 3px rgba(192, 198, 204, 0.12), 0px 1px 8px rgba(133, 144, 153, 0.2);
}

.item___uCZSI {
  padding-left: 12px;
  padding-right: 12px;
}
.NavBar___vkkwh {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 50px;
  border: 1px solid #DBE1E4;
  background: #FFFFFF;
  width: 100%;
  padding: 16px 60px;
}

.breadcrumb-content___JnGq8 {
  margin-left: 25px;
}

.Logo-content___uGsez {
  margin-right: 25px;
}

.left-content___VwsNj {
  display: flex;
  align-content: center;
}
.wrapper___GDopq {
  display: inline-block;
}

  .wrapper--hasMargin___Btpj- {
    margin-right: 11px;
  }

.separator___01qMZ {
  display: inline-block;
  margin: 0 5px;
  font-weight: 700;
}
@font-face {
  font-family: old-stamper;
  src: url("src/assets/fonts/old_stamper.ttf");
}

.RecordHeader___WjOtW {
  position: sticky;
  display: flex;
  min-width: 100%;
  padding: 21px 0;
  align-items: baseline;
  top: 0;
  z-index: 1;
  justify-content: center;
  margin-left: -15px;
  margin-right: -15px;
}

.RecordHeader___WjOtW::before {
    content: "";
    position: absolute;
    background: #F0F3F5;
    height: 100%;
    width: 100vw;
    top: 0;
    z-index: -1;
    border-bottom: 1px solid #C0C6CC;
   }

.isGray___PR13C {
  color: #859099
}

.backButtonLink___YY41- {
  position: absolute;
  padding: 5px 8px;
  left: -38px;
  border: 1px solid transparent;
  border-radius: 3px;
  transition: all .3s;
}

.backButtonLink___YY41-:hover {
    border-color: #C0C6CC;
  }

.backButtonLink___YY41- svg {
    margin: 0;
  }

.leftContent___LpPqV {
  margin-right: auto;
}

.displayName___gY-Cx {
  font-size: 24px;
  font-weight: 700;
  font-family: "Roboto", Arial, sans-serif;
  margin: 0 0 4px 0;
}

.currentState___--fM4 {
  font-family: "old-stamper", Arial, sans-serif;
  color: #000000;
  font-size: 24px;
}

.row___5C8g- {
  display: flex;
  align-items: center;
  gap: 8px;
}

.label___-dltC {
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
}

.icon___e-vFL {
  color: #859099;
  font-size: 16px;
}
.InfoCard___2OPaP{
  border-top: 4px solid #1FBCFF;
  height: 314px;
  margin-top: 15px;
  min-width: 155px;
  font-family: "Open Sans", Arial, sans-serif;
}

.icon___U2spx {
  height: 49px;
  margin-top: 31px;
  margin-left: 27px;
  width: 46px;
}

.title___9jkjA {
  font-size: 18px;
  height: 48px;
  margin-left: 24px;
  width: 123px;
  font-weight: 600;
  color: #1F46A1;
}

.count___tWK-D {
  font-size: 48px;
  font-family: 'Roboto', sans-serif;
  height: 57px;
  margin-top: 16px;
  margin-left: 24px;
  width: 54px;
}

.line___WdF0p {
  border: solid thin #C0C6CC;
  height: 1px;
  margin-top: 20px;
  margin-left: 19px;
  margin-right: 19px;
}

.detailsLine___2datd {
  margin-top: 11px;
  margin-left: 19px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detailsLineTitle___JXsMx {
  font-size: 12px;
  height: 17px;
  letter-spacing: 0;
  margin-right: 10px;
}

.detailsLineValue___RfGUh {
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  height: 22px;
}
.quickAccessCard___-jS20 {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100px;
  justify-content: space-around;
  margin-top: 15px;
  min-width: 250px;
}

.quickAccessCardTitle___Lb6IV {
  font-family: "Roboto", Arial, sans-serif;
  font-size: 36px;
  font-weight: 400;
}

.quickAccessCardDetails___r0Z2s {
  font-size: 14px;
}

.quickAccessCardDetails___r0Z2s a {
    text-decoration: none;
    font-family: "Open Sans", Arial, sans-serif;
    color: #1F46A1;
  }`)),document.head.appendChild(n)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import React, { forwardRef, createElement } from "react";
import c from "classnames";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faFileLines, faArrowUpRightFromSquare, faEllipsisVertical, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
const tokens = {
  "custom-properties": {
    "--color-blue-deep": "#1F1F81",
    "--color-blue-primary": "#1F46A1",
    "--color-blue-light": "#E8F8FF",
    "--color-blue-accent": "#1FBCFF",
    "--color-blue-pastel": "#5AC0F1",
    "--color-blue-pastel-light": "#5AC0F11A",
    "--color-blue-pastel-pale": "#ABC8DA",
    "--color-blue-pastel-pale-medium": "#CAE3F3",
    "--color-blue-pastel-pale-mild": "#D6E9FD",
    "--color-blue-pastel-pale-light": "#E6F5FE",
    "--color-blue-pastel-pale-light-2": "#F2FBFC",
    "--color-black-primary": "#000000",
    "--color-black-black-70": "#000000B2",
    "--color-white": "#FFFFFF",
    "--color-gray-dark": "#434952",
    "--color-gray-medium": "#859099",
    "--color-gray-mild": "#C0C6CC",
    "--color-gray-slight": "#DBE1E4",
    "--color-gray-shimmer": "#E6EDF0",
    "--color-gray-light": "#F0F3F5",
    "--color-green-success": "#2DC9A4",
    "--color-green-success-light": "#EBF9F7",
    "--color-green-primary": "#26AD92",
    "--color-green-deep": "#006551",
    "--color-green-olive": "#ADB311",
    "--color-green-aqua": "#5DCAC7",
    "--color-green-emerald": "#008000",
    "--color-yellow-warning": "#FFC107",
    "--color-yellow-warning-light": "#FFF9E6",
    "--color-red-error": "#DD3546",
    "--color-red-error-light": "#FBEAEC",
    "--color-red-deep-maroon": "#2E0402",
    "--color-red-cherry-red": "#993300",
    "--color-orange-primary": "#FF9900",
    "--color-orange-pastel": "#FFC49F",
    "--color-yellow-primary": "#F8EA0E",
    "--color-yellow-pastel": "#FFF37E",
    "--color-yellow-pastel-mild": "#FCF7CD",
    "--color-yellow-pastel-light": "#FEFBE7",
    "--color-lavender-primary": "#B78EFF",
    "--color-lavender-pastel-light": "#B78EFF19",
    "--font-size-12": "12px",
    "--font-size-14": "14px",
    "--font-size-16": "16px",
    "--font-size-18": "18px",
    "--font-size-24": "24px",
    "--font-size-36": "36px",
    "--font-weight-regular": "400",
    "--font-weight-semi-bold": "600",
    "--font-weight-bold": "700",
    "--font-family-oldStamper": '"old-stamper", Arial, sans-serif',
    "--font-family-openSans": '"Open Sans", Arial, sans-serif',
    "--font-family-TNR": '"TNR", Arial, sans-serif',
    "--font-family-Roboto": '"Roboto", Arial, sans-serif',
    "--spacing-point": "4",
    "--elevations-1": "0px 1px 1px rgba(192, 198, 204, 0.5), 0px 2px 1px rgba(133, 144, 153, 0.1)",
    "--elevations-2": "0px 2px 2px rgba(192, 198, 204, 0.14), 0px 3px 1px rgba(192, 198, 204, 0.12), 0px 1px 5px rgba(133, 144, 153, 0.2)",
    "--elevations-3": "0px 3px 4px rgba(192, 198, 204, 0.14), 0px 3px 3px rgba(192, 198, 204, 0.12), 0px 1px 8px rgba(133, 144, 153, 0.2)",
    "--elevations-4": "0px 5px 5px rgba(192, 198, 204, 0.2), 0px 8px 10px rgba(192, 198, 204, 0.14), 0px 3px 14px rgba(67, 73, 82, 0.12)",
    "--elevations-5": "0px 24px 38px rgba(133, 144, 153, 0.14), 0px 9px 46px rgba(67, 73, 82, 0.12), 0px 11px 15px rgba(67, 73, 82, 0.2)",
    "--elevations-6": "0px 24px 38px rgba(133, 144, 153, 0.14), 0px 9px 46px rgba(67, 73, 82, 0.12), 0px 11px 15px rgba(67, 73, 82, 0.2)",
    "--radius-4": "4px",
    "--radius-8": "8px",
    "--transition-timing": ".3s"
  }
};
const spinner$1 = "spinner___T62Mn";
const spin = "spin___On2jd";
const style$b = {
  spinner: spinner$1,
  spin
};
const Spinner = ({
  color,
  size = 24
}) => /* @__PURE__ */ jsxs("svg", {
  className: style$b.spinner,
  fill: color === "blue" ? tokens["custom-properties"]["--color-blue-primary"] : tokens["custom-properties"]["--color-white"],
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ jsx("g", {
    clipPath: "url(#clip0_2159_30943)",
    children: /* @__PURE__ */ jsx("path", {
      d: "M13.3125 6.0625C13.3125 5.35156 12.7109 4.75 12 4.75C11.2617 4.75 10.6875 5.35156 10.6875 6.0625C10.6875 6.80078 11.2617 7.375 12 7.375C12.7109 7.375 13.3125 6.80078 13.3125 6.0625ZM12 16.125C11.2617 16.125 10.6875 16.7266 10.6875 17.4375C10.6875 18.1758 11.2617 18.75 12 18.75C12.7109 18.75 13.3125 18.1758 13.3125 17.4375C13.3125 16.7266 12.7109 16.125 12 16.125ZM17.6875 10.4375C16.9492 10.4375 16.375 11.0391 16.375 11.75C16.375 12.4883 16.9492 13.0625 17.6875 13.0625C18.3984 13.0625 19 12.4883 19 11.75C19 11.0391 18.3984 10.4375 17.6875 10.4375ZM7.625 11.75C7.625 11.0391 7.02344 10.4375 6.3125 10.4375C5.57422 10.4375 5 11.0391 5 11.75C5 12.4883 5.57422 13.0625 6.3125 13.0625C7.02344 13.0625 7.625 12.4883 7.625 11.75ZM7.95312 14.4844C7.24219 14.4844 6.64062 15.0586 6.64062 15.7969C6.64062 16.5078 7.24219 17.1094 7.95312 17.1094C8.69141 17.1094 9.26562 16.5078 9.26562 15.7969C9.26562 15.0586 8.69141 14.4844 7.95312 14.4844ZM16.0195 14.4844C15.2812 14.4844 14.707 15.0586 14.707 15.7969C14.707 16.5078 15.2812 17.1094 16.0195 17.1094C16.7305 17.1094 17.332 16.5078 17.332 15.7969C17.332 15.0586 16.7305 14.4844 16.0195 14.4844ZM7.95312 6.41797C7.24219 6.41797 6.64062 7.01953 6.64062 7.73047C6.64062 8.46875 7.24219 9.04297 7.95312 9.04297C8.69141 9.04297 9.26562 8.46875 9.26562 7.73047C9.26562 7.01953 8.69141 6.41797 7.95312 6.41797Z"
    })
  }), /* @__PURE__ */ jsx("defs", {
    children: /* @__PURE__ */ jsx("clipPath", {
      id: "clip0_2159_30943",
      children: /* @__PURE__ */ jsx("rect", {
        width: "24",
        height: "24",
        fill: "white"
      })
    })
  })]
});
const button = "button___o4Lfp";
const primary = "primary___pfqbx";
const secondary = "secondary___pQL01";
const ghost$1 = "ghost___TnsO6";
const large = "large___zaoE3";
const small = "small___dHbw9";
const disabled = "disabled___2mTHA";
const spinner = "spinner___k4QJT";
const loading = "loading___GEpQi";
const fullWidth = "fullWidth___8GO-B";
const fullHeight = "fullHeight___KqYnw";
const icon$2 = "icon___m-HKy";
const style$a = {
  button,
  primary,
  secondary,
  ghost: ghost$1,
  large,
  small,
  disabled,
  spinner,
  loading,
  fullWidth,
  fullHeight,
  icon: icon$2
};
const Button = ({
  id,
  label: label2 = "Button",
  type = "primary",
  size = "large",
  hasArrow,
  title: title2,
  isDisabled,
  isLoading,
  isSubmit,
  isFullWidth,
  isFullHeight,
  onClick,
  children,
  ...dataSet
}, ref) => {
  return /* @__PURE__ */ jsxs("button", {
    ...dataSet,
    id,
    className: c(style$a.button, style$a[`${type}`], style$a[`${size}`], {
      [style$a.disabled]: isDisabled
    }, {
      [style$a.loading]: isLoading
    }, {
      [style$a.fullWidth]: isFullWidth
    }, {
      [style$a.fullHeight]: isFullHeight
    }),
    type: isSubmit ? "submit" : "button",
    disabled: isDisabled,
    title: title2,
    ref,
    onClick,
    children: [children || /* @__PURE__ */ jsx("span", {
      children: label2
    }), isLoading && /* @__PURE__ */ jsx("div", {
      className: style$a.spinner,
      children: /* @__PURE__ */ jsx(Spinner, {
        ...type !== "primary" && {
          color: "blue"
        }
      })
    }), hasArrow && /* @__PURE__ */ jsx(FontAwesomeIcon, {
      className: style$a.icon,
      style: {
        marginLeft: "10px"
      },
      icon: faCaretDown,
      fontSize: "12px"
    })]
  });
};
const Button$1 = forwardRef(Button);
const wrapper$1 = "wrapper___HNzWL";
const ghost = "ghost___CfQAc";
const isCircle = "isCircle___o1G-u";
const style$9 = {
  wrapper: wrapper$1,
  ghost,
  isCircle
};
const IconButton = ({
  id,
  icon: icon2 = faFileLines,
  iconSize = "18px",
  type = "primary",
  onClick,
  isCircle: isCircle2,
  isDisabled
}, ref) => {
  return /* @__PURE__ */ jsx("div", {
    className: c(style$9.wrapper, {
      [style$9.isCircle]: isCircle2
    }),
    children: /* @__PURE__ */ jsx(Button$1, {
      id,
      type,
      onClick,
      isDisabled,
      ref,
      isFullWidth: true,
      children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
        icon: icon2,
        fontSize: iconSize
      })
    })
  });
};
const IconButton$1 = React.forwardRef(IconButton);
const link = "link___Ey28k";
const linkDisabled = "link-disabled___Hk7Kr";
const style$8 = {
  link,
  "link-disabled": "link-disabled___Hk7Kr",
  linkDisabled
};
const Link = ({
  id,
  label: label2,
  href,
  isExternal,
  title: title2,
  isDisabled
}) => /* @__PURE__ */ jsxs("a", {
  id,
  href: isDisabled ? "#" : href,
  className: c(style$8.link, {
    [style$8.linkDisabled]: isDisabled
  }),
  title: title2,
  rel: "noopener noreferrer",
  ...isExternal && {
    target: "_blank"
  },
  children: [/* @__PURE__ */ jsx("span", {
    className: style$8.label,
    children: label2
  }), isExternal && /* @__PURE__ */ jsx(FontAwesomeIcon, {
    icon: faArrowUpRightFromSquare
  })]
});
const logo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzcwIiBoZWlnaHQ9IjEwOSIgdmlld0JveD0iMCAwIDc3MCAxMDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF85MzdfNDM4NSkiPgo8cGF0aCBkPSJNMjI5LjM4NCAxMDguOTIzTDIxNC4zMiA5Mi41NDM5QzIxMC41NzIgOTMuNTEwOSAyMDYuNzE1IDkzLjk5MzEgMjAyLjg0MyA5My45Nzg2QzE5NS4zNTkgOTQuMDg1MSAxODcuOTg1IDkyLjE2NDQgMTgxLjUwMyA4OC40MkMxNzUuMTkyIDg0Ljc0IDE3MC4wMDQgNzkuNDA3NSAxNjYuNDk5IDcyLjk5NzFDMTYyLjg4NyA2Ni4xMiAxNjEgNTguNDY4MyAxNjEgNTAuNzAwMkMxNjEgNDIuOTMyMiAxNjIuODg3IDM1LjI4MDQgMTY2LjQ5OSAyOC40MDM0QzE2OS45OTUgMjIuMDAxOCAxNzUuMTg2IDE2LjY4NjYgMTgxLjUwMyAxMy4wNDA2QzE4OC4wMTYgOS40MzM0NSAxOTUuMzM5IDcuNTQxMDIgMjAyLjc4NCA3LjU0MTAyQzIxMC4yMjkgNy41NDEwMiAyMTcuNTUyIDkuNDMzNDUgMjI0LjA2NCAxMy4wNDA2QzIzMC4zNzMgMTYuNjc4NiAyMzUuNTQ2IDIxLjk5NzIgMjM5LjAwOSAyOC40MDM0QzI0Mi41MzEgMzUuMTgwOSAyNDQuMzk1IDQyLjY5NzYgMjQ0LjQ0NyA1MC4zMzU2QzI0NC40OTkgNTcuOTczNyAyNDIuNzM4IDY1LjUxNSAyMzkuMzA4IDcyLjMzOThDMjM2LjA3NCA3OC41ODM4IDIzMS4yNDkgODMuODYyOSAyMjUuMzIgODcuNjQyNkwyNDYuMjQyIDEwOC45MjNMMjI5LjM4NCAxMDguOTIzWk0xNzguNTE0IDY2LjgzOThDMTgwLjY5IDcxLjI3NTggMTg0LjExOSA3NC45NzU2IDE4OC4zNzggNzcuNDgwNUMxOTIuNzc3IDc5Ljk5NzggMTk3Ljc3NiA4MS4yNzg0IDIwMi44NDQgODEuMTg2NkMyMDcuODU0IDgxLjI3MzIgMjEyLjc5NCA3OS45OTE5IDIxNy4xMyA3Ny40ODA1QzIyMS4zNjEgNzQuOTYwMyAyMjQuNzY4IDcxLjI2MzEgMjI2LjkzNCA2Ni44Mzk4QzIyOS4yNTcgNjEuNzc2NSAyMzAuNDYgNTYuMjcxIDIzMC40NiA1MC42OTk5QzIzMC40NiA0NS4xMjg3IDIyOS4yNTcgMzkuNjIzMiAyMjYuOTM0IDM0LjU1OTlDMjI0Ljc2NiAzMC4xMzc4IDIyMS4zNiAyNi40NDExIDIxNy4xMyAyMy45MTk5QzIxMi43OTMgMjEuNDA5NSAyMDcuODU0IDIwLjEyODMgMjAyLjg0NCAyMC4yMTM4QzE5Ny43NzYgMjAuMTIzMSAxOTIuNzc4IDIxLjQwMzYgMTg4LjM3OCAyMy45MTk5QzE4NC4xMiAyNi40MjU4IDE4MC42OTEgMzAuMTI1IDE3OC41MTQgMzQuNTU5OUMxNzYuMTkxIDM5LjYyMzIgMTc0Ljk4OCA0NS4xMjg3IDE3NC45ODggNTAuNjk5OUMxNzQuOTg4IDU2LjI3MSAxNzYuMTkxIDYxLjc3NjUgMTc4LjUxNCA2Ni44Mzk4WiIgZmlsbD0iIzFGMUY4MSIvPgo8cGF0aCBkPSJNNDA2LjE0MiA3Mi45OTcxQzQwMi42NzggNzkuMzMxNCAzOTcuMzg3IDg0LjQ3NjEgMzkwLjk1OCA4Ny43NjE4QzM4NC4zMDIgOTEuMjcwNSAzNzYuMzUyIDkzLjAyNCAzNjcuMTA3IDkzLjAyMjVIMzM4Ljg5M1Y4LjYxNzE5SDM2Ny4xMDdDMzc2LjM1MyA4LjYxNzE5IDM4NC4zMDMgMTAuMzUwOCAzOTAuOTU4IDEzLjgxNzlDMzk3LjM3OSAxNy4wNTkxIDQwMi42NzEgMjIuMTYzNSA0MDYuMTQyIDI4LjQ2MjlDNDA5LjYwOSAzNC43NjAzIDQxMS4zNDIgNDIuMTcyNyA0MTEuMzQxIDUwLjcwMDJDNDExLjM0MSA1OS4yMjk1IDQwOS42MDggNjYuNjYxOCA0MDYuMTQyIDcyLjk5NzFaTTM4OS4zNDUgNzIuODE4NEMzOTQuNzYzIDY3LjU1NzcgMzk3LjQ3MyA2MC4xODQ5IDM5Ny40NzQgNTAuNzAwMkMzOTcuNDc0IDQxLjIxNTkgMzk0Ljc2NCAzMy44NDM0IDM4OS4zNDUgMjguNTgyNkMzODMuOTIzIDIzLjMyMjYgMzc2LjE1MiAyMC42OTI0IDM2Ni4wMzEgMjAuNjkxOUgzNTIuNTIyVjgwLjcwOEgzNjYuMDMxQzM3Ni4xNTIgODAuNzA4IDM4My45MjMgNzguMDc4MSAzODkuMzQ1IDcyLjgxODRIMzg5LjM0NVoiIGZpbGw9IiMxRjFGODEiLz4KPHBhdGggZD0iTTQzMy41NzggOC42MTcxOUw0NTcuODQ4IDc4LjQzNjZMNDgyLjIzNyA4LjYxNzE5SDQ5Ny4wNjJMNDY2LjU3NiA5My4wMjI1SDQ0OS4xMkw0MTguNzU1IDguNjE3MTlINDMzLjU3OFoiIGZpbGw9IiMxRkJDRkYiLz4KPHBhdGggZD0iTTUwNy43MDEgMi4yODEyN0M1MDkuNDMgMC43MTY2OCA1MTEuNzA4IC0wLjA5OTk1NDYgNTE0LjAzNyAwLjAwOTc4NzhDNTE2LjM4NCAtMC4wOTI1MjA0IDUxOC42NzggMC43MjIxMDIgNTIwLjQzNCAyLjI4MTI3QzUyMS4yMzEgMy4wMDU1OCA1MjEuODYyIDMuODkzMSA1MjIuMjg1IDQuODgzNDFDNTIyLjcwOCA1Ljg3MzczIDUyMi45MTMgNi45NDM1NyA1MjIuODg1IDguMDIwMDdDNTIyLjkyIDkuMDggNTIyLjcxOSAxMC4xMzQ1IDUyMi4yOTUgMTEuMTA2NUM1MjEuODcxIDEyLjA3ODUgNTIxLjIzNSAxMi45NDM2IDUyMC40MzQgMTMuNjM4N0M1MTguNjQ1IDE1LjEyODQgNTE2LjM2MyAxNS44OTYgNTE0LjAzNyAxNS43OTExQzUxMS43MjkgMTUuOTAzMyA1MDkuNDY0IDE1LjEzMzkgNTA3LjcwMSAxMy42Mzg3QzUwNi45MTUgMTIuOTM0OCA1MDYuMjkzIDEyLjA2NjYgNTA1Ljg4IDExLjA5NTZDNTA1LjQ2NyAxMC4xMjQ3IDUwNS4yNzIgOS4wNzQ2NyA1MDUuMzEgOC4wMjAwN0M1MDUuMjggNi45NDg3NSA1MDUuNDc3IDUuODgzMjUgNTA1Ljg5IDQuODkzOTdDNTA2LjMwMiAzLjkwNDcgNTA2LjkxOSAzLjAxNDE5IDUwNy43MDEgMi4yODEyN1pNNTIwLjg1MSAyNy4xNDg1VjkzLjAyM0g1MDcuMjIzVjI3LjE0ODVINTIwLjg1MVoiIGZpbGw9IiMxRkJDRkYiLz4KPHBhdGggZD0iTTU3Ny41NzkgMzIuMjI5M0M1ODIuMjk0IDM2LjI2NzcgNTg1LjM0IDQxLjkxMjkgNTg2LjEyOCA0OC4wNzAySDU3My4yMTZDNTcyLjc4MyA0NC43MTg2IDU3MS4xNDggNDEuNjM4NSA1NjguNjE0IDM5LjQwMjdDNTY2LjEwMyAzNy4yMTEzIDU2Mi43NzUgMzYuMTE1MyA1NTguNjMgMzYuMTE0NkM1NTUuMjAyIDM2LjExNDYgNTUyLjU1MiAzNi45MzE3IDU1MC42OCAzOC41NjU4QzU0OS43NDYgMzkuMzkyMSA1NDkuMDEgNDAuNDE2OSA1NDguNTIzIDQxLjU2NUM1NDguMDM3IDQyLjcxMzEgNTQ3LjgxNCA0My45NTU1IDU0Ny44NzEgNDUuMjAxQzU0Ny44MzMgNDYuMTM0NCA1NDcuOTk1IDQ3LjA2NTEgNTQ4LjM0NSA0Ny45MzA5QzU0OC42OTYgNDguNzk2OCA1NDkuMjI3IDQ5LjU3NzkgNTQ5LjkwNCA1MC4yMjJDNTUxLjM2OSA1MS41NjM4IDU1My4xIDUyLjU4MjEgNTU0Ljk4NSA1My4yMTA4QzU1Ny44MzEgNTQuMTU2MyA1NjAuNzI0IDU0Ljk1NDQgNTYzLjY1MiA1NS42MDE5QzU2Ny43MzUgNTYuNDY3NCA1NzEuNzUxIDU3LjYyNjQgNTc1LjY2OCA1OS4wNjk3QzU3OC43MzUgNjAuMjY2IDU4MS40NSA2Mi4yMTk2IDU4My41NTggNjQuNzQ4NEM1ODUuNzQ5IDY3LjMzOTIgNTg2Ljg0NCA3MC44NjU5IDU4Ni44NDUgNzUuMzI4NEM1ODYuOTE0IDc3Ljg5NSA1ODYuMzgyIDgwLjQ0MjEgNTg1LjI5MyA4Mi43NjY5QzU4NC4yMDMgODUuMDkxNyA1ODIuNTg1IDg3LjEyOTggNTgwLjU2OSA4OC43MTlDNTc2LjM4NCA5Mi4xNDY3IDU3MC43NDUgOTMuODYwMiA1NjMuNjUyIDkzLjg1OTZDNTU1LjQ0MiA5My44NTk2IDU0OC44MDcgOTEuOTQ2OCA1NDMuNzQ3IDg4LjEyMTNDNTM4LjY4NCA4NC4yOTUyIDUzNS42MzUgNzguOTU1MiA1MzQuNiA3Mi4xMDEzSDU0Ny44N0M1NDguMDI5IDczLjgwNTYgNTQ4LjUzNSA3NS40NTk0IDU0OS4zNTcgNzYuOTYwNUM1NTAuMTggNzguNDYxNiA1NTEuMzAxIDc5Ljc3ODIgNTUyLjY1MiA4MC44Mjg5QzU1NS40NDEgODMuMDYxMyA1NTkuMTA4IDg0LjE3NzIgNTYzLjY1MSA4NC4xNzY1QzU2Ni40NTYgODQuMzM3MSA1NjkuMjE1IDgzLjQxNzQgNTcxLjM2MiA4MS42MDY1QzU3Mi4yNzUgODAuNzg5MSA1NzIuOTk5IDc5Ljc4MjkgNTczLjQ4NCA3OC42NTc5QzU3My45NjkgNzcuNTMyOCA1NzQuMjA0IDc2LjMxNTcgNTc0LjE3MiA3NS4wOTA5QzU3NC4yMjIgNzQuMDc0MiA1NzQuMDU2IDczLjA1ODQgNTczLjY4NSA3Mi4xMTA0QzU3My4zMTUgNzEuMTYyNCA1NzIuNzQ3IDcwLjMwMzcgNTcyLjAyMSA2OS41OTA5QzU3MC40NyA2OC4xNjgyIDU2OC42MzcgNjcuMDg4NyA1NjYuNjQxIDY2LjQyMjlDNTYzLjc0MiA2NS40NjYxIDU2MC43ODcgNjQuNjg3NiA1NTcuNzkzIDY0LjA5MTlDNTUzLjg0MiA2My4yMTg0IDU0OS45NDkgNjIuMTAwNCA1NDYuMTM3IDYwLjc0NDJDNTQzLjE1NCA1OS42MzI2IDU0MC41MTUgNTcuNzU2NiA1MzguNDg1IDU1LjMwNDJDNTM2LjM3MyA1Mi43OTM0IDUzNS4zMTcgNDkuMzg2MiA1MzUuMzE3IDQ1LjA4MjVDNTM1LjI0NCA0Mi40ODk1IDUzNS43NzIgMzkuOTE0NyA1MzYuODYxIDM3LjU2MDRDNTM3Ljk1IDM1LjIwNiA1MzkuNTcgMzMuMTM2MSA1NDEuNTk0IDMxLjUxMzJDNTQ1Ljc3OCAyOC4wNDU5IDU1MS41NzcgMjYuMzEyMyA1NTguOTg5IDI2LjMxMjVDNTY2LjcxOSAyNi4zMTE4IDU3Mi45MTYgMjguMjg0IDU3Ny41NzkgMzIuMjI5M1oiIGZpbGw9IiMxRkJDRkYiLz4KPHBhdGggZD0iTTYwMC45NTMgMi4yODEyOEM2MDIuNjgyIDAuNzE2NjcgNjA0Ljk2IC0wLjA5OTk2OSA2MDcuMjg5IDAuMDA5NzkwNjVDNjA5LjYzNSAtMC4wOTI1Mzg3IDYxMS45MjkgMC43MjIwODYgNjEzLjY4NiAyLjI4MTI4QzYxNC40ODMgMy4wMDU1NyA2MTUuMTE0IDMuODkzMSA2MTUuNTM3IDQuODgzNDJDNjE1Ljk2IDUuODczNzMgNjE2LjE2NSA2Ljk0MzU2IDYxNi4xMzcgOC4wMjAwN0M2MTYuMTcyIDkuMDgwMDEgNjE1Ljk3MSAxMC4xMzQ1IDYxNS41NDcgMTEuMTA2NUM2MTUuMTIzIDEyLjA3ODYgNjE0LjQ4NyAxMi45NDM3IDYxMy42ODYgMTMuNjM4N0M2MTEuODk2IDE1LjEyODQgNjA5LjYxNSAxNS44OTYxIDYwNy4yODkgMTUuNzkxMUM2MDQuOTgxIDE1LjkwMzMgNjAyLjcxNiAxNS4xMzM5IDYwMC45NTMgMTMuNjM4N0M2MDAuMTY3IDEyLjkzNDggNTk5LjU0NSAxMi4wNjY2IDU5OS4xMzIgMTEuMDk1NkM1OTguNzE5IDEwLjEyNDcgNTk4LjUyNCA5LjA3NDY4IDU5OC41NjIgOC4wMjAwN0M1OTguNTMyIDYuOTQ4NzYgNTk4LjcyOSA1Ljg4MzI1IDU5OS4xNDIgNC44OTM5OEM1OTkuNTU0IDMuOTA0NyA2MDAuMTcxIDMuMDE0MTkgNjAwLjk1MyAyLjI4MTI4Wk02MTQuMTAzIDI3LjE0ODVWOTMuMDIzSDYwMC40NzVWMjcuMTQ4NUg2MTQuMTAzWiIgZmlsbD0iIzFGQkNGRiIvPgo8cGF0aCBkPSJNNjc3Ljk0NiAzMC4zNzYzQzY4Mi45ODkgMzMuMDMxMSA2ODcuMTQ1IDM3LjEwNCA2ODkuOTAxIDQyLjA5MjZDNjkyLjczIDQ3LjY2ODUgNjk0LjIwNCA1My44MzMgNjk0LjIwNCA2MC4wODU2QzY5NC4yMDQgNjYuMzM4MiA2OTIuNzMgNzIuNTAyNiA2ODkuOTAxIDc4LjA3ODVDNjg3LjE0NiA4My4wNjc5IDY4Mi45OSA4Ny4xNDEyIDY3Ny45NDYgODkuNzk1M0M2NzIuNjMzIDkyLjU1NTkgNjY2LjcxNyA5My45NTI2IDY2MC43MyA5My44NTk3QzY1NC43NjEgOTMuOTU3OSA2NDguODYzIDkyLjU2MDcgNjQzLjU3MyA4OS43OTUzQzYzOC41MzQgODcuMTA4IDYzNC4zODEgODMuMDE3NSA2MzEuNjE4IDc4LjAxODlDNjI4Ljc1MSA3Mi40NjU0IDYyNy4yNTQgNjYuMzA2IDYyNy4yNTQgNjAuMDU1OEM2MjcuMjU0IDUzLjgwNTUgNjI4Ljc1MSA0Ny42NDYxIDYzMS42MTggNDIuMDkyNkM2MzQuMzk2IDM3LjEyMDMgNjM4LjU0NiAzMy4wNTI4IDY0My41NzMgMzAuMzc2M0M2NDguODY0IDI3LjYxMTQgNjU0Ljc2MSAyNi4yMTQgNjYwLjczIDI2LjMxMTRDNjY2LjcxNyAyNi4yMTk0IDY3Mi42MzIgMjcuNjE2MiA2NzcuOTQ2IDMwLjM3NjNaTTY1MS4wNDYgNDAuNTM4NEM2NDggNDIuMjMyMyA2NDUuNTI1IDQ0Ljc5MSA2NDMuOTMyIDQ3Ljg5MUM2NDIuMTYxIDUxLjcwMTcgNjQxLjI0MyA1NS44NTMzIDY0MS4yNDMgNjAuMDU1NkM2NDEuMjQzIDY0LjI1NzkgNjQyLjE2MSA2OC40MDk1IDY0My45MzIgNzIuMjIwMUM2NDUuNTM2IDc1LjI5NjQgNjQ4LjAxIDc3LjgzMjggNjUxLjA0NiA3OS41MTNDNjU0LjAzMiA4MS4wODM4IDY1Ny4zNTUgODEuOTA0NiA2NjAuNzMgODEuOTA0NkM2NjQuMTA0IDgxLjkwNDYgNjY3LjQyNyA4MS4wODM4IDY3MC40MTQgNzkuNTEzQzY3My40NDkgNzcuODMyNSA2NzUuOTIzIDc1LjI5NjMgNjc3LjUyNyA3Mi4yMjAxQzY3OS4yOTkgNjguNDA5NiA2ODAuMjE4IDY0LjI1OCA2ODAuMjE4IDYwLjA1NTZDNjgwLjIxOCA1NS44NTMxIDY3OS4yOTkgNTEuNzAxNSA2NzcuNTI3IDQ3Ljg5MUM2NzUuOTM1IDQ0Ljc5MTIgNjczLjQ1OSA0Mi4yMzI2IDY3MC40MTQgNDAuNTM4NEM2NjcuNDI3IDM4Ljk2NzkgNjY0LjEwNCAzOC4xNDczIDY2MC43MyAzOC4xNDczQzY1Ny4zNTYgMzguMTQ3MyA2NTQuMDMyIDM4Ljk2NzkgNjUxLjA0NiA0MC41Mzg0WiIgZmlsbD0iIzFGQkNGRiIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDFfOTM3XzQzODUpIj4KPHBhdGggZD0iTTMuNDQwOTIgNjMuOTkxOUMxLjkwOTU3IDYxLjMyNTMgMy44MzQ1OCA1OCA2LjkwOTY2IDU4SDU1LjcwNDJDNTcuMTI1OSA1OCA1OC40NDA5IDU4Ljc1NDcgNTkuMTU4IDU5Ljk4MjRMODMuOTg0OCAxMDIuNDgyQzg1LjU0MjUgMTA1LjE0OSA4My42MTkxIDEwOC41IDgwLjUzMDkgMTA4LjVIMzEuMzE1NkMyOS44ODMyIDEwOC41IDI4LjU2MDIgMTA3LjczNCAyNy44NDY5IDEwNi40OTJMMy40NDA5MiA2My45OTE5WiIgZmlsbD0iI0ZEOUQ1MiIvPgo8cGF0aCBkPSJNOTAuOTMxNyA5Ljk0ODY4QzkyLjQ3NTEgNy4yOTYwNSA5Ni4zMDc0IDcuMjk3ODcgOTcuODQ4MyA5Ljk1MTk3TDEyMi41ODUgNTIuNTYwN0MxMjMuMzAyIDUzLjc5NDUgMTIzLjMwNyA1NS4zMTY2IDEyMi41OTggNTYuNTU1TDk3Ljc0NzQgMTAwLjAwMUM5Ni4yMTcxIDEwMi42NzcgOTIuMzYzNCAxMDIuNjg5IDkwLjgxNiAxMDAuMDI0TDY1Ljg2NTMgNTcuMDQ3MkM2NS4xNDM2IDU1LjgwNDEgNjUuMTQ0NCA1NC4yNjk1IDY1Ljg2NzIgNTMuMDI3Mkw5MC45MzE3IDkuOTQ4NjhaIiBmaWxsPSIjMUYxRjgxIi8+CjxwYXRoIGQ9Ik04MC42ODkxIDAuMzA2NjQxQzgzLjc3MjEgMC4zMDY2NDEgODUuNjk2MSAzLjY0NzQyIDg0LjE0ODkgNi4zMTQwN0w1OS40NTM5IDQ4Ljg3NTlDNTguNzM4MiA1MC4xMDkzIDU3LjQyMDEgNTAuODY4NCA1NS45OTQxIDUwLjg2ODRMNy4xNDQ0MSA1MC44Njg0QzQuMDE4MDggNTAuODY4NCAyLjEwMDIxIDQ3LjQ0MjkgMy43MzQzMiA0NC43Nzc3TDI5LjgyOTQgMi4yMTU4OEMzMC41NTY3IDEuMDI5NjggMzEuODQ4MSAwLjMwNjY0MSAzMy4yMzk1IDAuMzA2NjQyTDgwLjY4OTEgMC4zMDY2NDFaIiBmaWxsPSIjMUZCQ0ZGIi8+CjwvZz4KPHBhdGggZD0iTTMxMS4zMzggMzAuMzc2M0MzMTUuOTIyIDMzLjE3NzUgMzE5LjU5NyAzNy4yNDY5IDMyMS45MTggNDIuMDkyNkMzMjQuNDQgNDcuNzU1OCAzMjUuNzQ0IDUzLjg4NiAzMjUuNzQ0IDYwLjA4NTVDMzI1Ljc0NCA2Ni4yODUgMzI0LjQ0IDcyLjQxNTIgMzIxLjkxOCA3OC4wNzg0QzMxOS41OTggODIuOTI0NyAzMTUuOTIzIDg2Ljk5NDYgMzExLjMzOCA4OS43OTUyQzMwNi42OTEgOTIuNTQzNyAzMDEuMzczIDkzLjk1MDYgMjk1Ljk3NSA5My44NTk2QzI5MC41MzcgOTQuMDE5MSAyODUuMTg2IDkyLjQ3MjIgMjgwLjY3MiA4OS40MzU5QzI3Ni41MjkgODYuNTk1NSAyNzMuNDIzIDgyLjQ4MjcgMjcxLjgyNSA3Ny43MlY5My4wMjI4SDI1OC4xOTZWNC41NTI3M0gyNzEuODI1VjQyLjQ1MTFDMjczLjQyNCAzNy42ODg5IDI3Ni41MyAzMy41NzY0IDI4MC42NzIgMzAuNzM0OEMyODUuMTg3IDI3LjY5OTcgMjkwLjUzOCAyNi4xNTMxIDI5NS45NzUgMjYuMzExNkMzMDEuMzczIDI2LjIyMTQgMzA2LjY5MSAyNy42MjgzIDMxMS4zMzggMzAuMzc2M1pNMjgxLjUwOSA0MC45NTY4QzI3OC40NDggNDIuNzgzOCAyNzUuOTYyIDQ1LjQzNTMgMjc0LjMzNiA0OC42MDgyQzI3Mi42MDUgNTIuMTc2IDI3MS43MDYgNTYuMDkgMjcxLjcwNiA2MC4wNTU3QzI3MS43MDYgNjQuMDIxMyAyNzIuNjA1IDY3LjkzNTMgMjc0LjMzNiA3MS41MDMyQzI3NS45NzUgNzQuNjUxNCAyNzguNDU5IDc3LjI4MDQgMjgxLjUwOSA3OS4wOTVDMjg0LjYyNyA4MC45MTE4IDI4OC4xODIgODEuODQxOCAyOTEuNzkxIDgxLjc4NDRDMjk3Ljg0NyA4MS43ODQ0IDMwMi43MDkgNzkuODUxOCAzMDYuMzc2IDc1Ljk4NjZDMzEwLjA0MSA3Mi4xMjEzIDMxMS44NzUgNjYuODAxIDMxMS44NzYgNjAuMDI1NkMzMTEuODc2IDUzLjMzMDMgMzEwLjA0MyA0OC4wMyAzMDYuMzc2IDQ0LjEyNDhDMzAyLjcwOSA0MC4yMjA2IDI5Ny44NDggMzguMjY3OSAyOTEuNzkxIDM4LjI2NjhDMjg4LjE4MiAzOC4yMDkzIDI4NC42MjcgMzkuMTM5NSAyODEuNTA5IDQwLjk1NjhWNDAuOTU2OFoiIGZpbGw9IiMxRjFGODEiLz4KPHBhdGggZD0iTTc2Mi41ODkgMzMuNDg1NkM3NjcuMjEgMzguNDI4NiA3NjkuNTIxIDQ1LjQ4MjEgNzY5LjUyMyA1NC42NDYzVjkzLjAyMzdINzU1Ljg5NFY1Ni4wODEzQzc1NS44OTQgNTAuMTgzOSA3NTQuMzc5IDQ1LjYyMDkgNzUxLjM1MSA0Mi4zOTIzQzc0OC4zMjEgMzkuMTY0MyA3NDQuMTc2IDM3LjU1MDQgNzM4LjkxNyAzNy41NTA2QzczMy40OTYgMzcuNTUwNiA3MjkuMTUzIDM5LjI4NCA3MjUuODg2IDQyLjc1MDZDNzIyLjYxNiA0Ni4yMTggNzIwLjk4MiA1MS4yOTkgNzIwLjk4NCA1Ny45OTM4VjkzLjAyMzhINzA3LjM1NFYyNy4xNDkySDcyMC45ODNWNDEuNjE1QzcyMi41NTkgMzYuOTAzNyA3MjUuNjc2IDMyLjg2MDUgNzI5LjgzMSAzMC4xMzhDNzM0LjEwNCAyNy4zOTA5IDczOS4wOTggMjUuOTc2IDc0NC4xNzcgMjYuMDczQzc1MS44MjkgMjYuMDczIDc1Ny45NjYgMjguNTQzOSA3NjIuNTg5IDMzLjQ4NTZaIiBmaWxsPSIjMUZCQ0ZGIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfOTM3XzQzODUiPgo8cmVjdCB3aWR0aD0iNzcwIiBoZWlnaHQ9IjEwOSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV85MzdfNDM4NSI+CjxyZWN0IHdpZHRoPSIxMjIiIGhlaWdodD0iMTIyIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAtNykiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
const darkLogo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzcwIiBoZWlnaHQ9IjEwOSIgdmlld0JveD0iMCAwIDc3MCAxMDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMTU1XzMwODkwKSI+CjxwYXRoIGQ9Ik0yMjkuMzg0IDEwOC45MjNMMjE0LjMyIDkyLjU0MzlDMjEwLjU3MiA5My41MTA5IDIwNi43MTUgOTMuOTkzMSAyMDIuODQzIDkzLjk3ODZDMTk1LjM1OSA5NC4wODUxIDE4Ny45ODUgOTIuMTY0NCAxODEuNTAzIDg4LjQyQzE3NS4xOTIgODQuNzQgMTcwLjAwNCA3OS40MDc1IDE2Ni40OTkgNzIuOTk3MUMxNjIuODg3IDY2LjEyIDE2MSA1OC40NjgzIDE2MSA1MC43MDAyQzE2MSA0Mi45MzIyIDE2Mi44ODcgMzUuMjgwNCAxNjYuNDk5IDI4LjQwMzRDMTY5Ljk5NSAyMi4wMDE4IDE3NS4xODYgMTYuNjg2NiAxODEuNTAzIDEzLjA0MDZDMTg4LjAxNiA5LjQzMzQ1IDE5NS4zMzkgNy41NDEwMiAyMDIuNzg0IDcuNTQxMDJDMjEwLjIyOSA3LjU0MTAyIDIxNy41NTIgOS40MzM0NSAyMjQuMDY0IDEzLjA0MDZDMjMwLjM3MyAxNi42Nzg2IDIzNS41NDYgMjEuOTk3MiAyMzkuMDA5IDI4LjQwMzRDMjQyLjUzMSAzNS4xODA5IDI0NC4zOTUgNDIuNjk3NiAyNDQuNDQ3IDUwLjMzNTZDMjQ0LjQ5OSA1Ny45NzM3IDI0Mi43MzggNjUuNTE1IDIzOS4zMDggNzIuMzM5OEMyMzYuMDc0IDc4LjU4MzggMjMxLjI0OSA4My44NjI5IDIyNS4zMiA4Ny42NDI2TDI0Ni4yNDIgMTA4LjkyM0wyMjkuMzg0IDEwOC45MjNaTTE3OC41MTQgNjYuODM5OEMxODAuNjkgNzEuMjc1OCAxODQuMTE5IDc0Ljk3NTYgMTg4LjM3OCA3Ny40ODA1QzE5Mi43NzcgNzkuOTk3OCAxOTcuNzc2IDgxLjI3ODQgMjAyLjg0NCA4MS4xODY2QzIwNy44NTQgODEuMjczMiAyMTIuNzk0IDc5Ljk5MTkgMjE3LjEzIDc3LjQ4MDVDMjIxLjM2MSA3NC45NjAzIDIyNC43NjggNzEuMjYzMSAyMjYuOTM0IDY2LjgzOThDMjI5LjI1NyA2MS43NzY1IDIzMC40NiA1Ni4yNzEgMjMwLjQ2IDUwLjY5OTlDMjMwLjQ2IDQ1LjEyODcgMjI5LjI1NyAzOS42MjMyIDIyNi45MzQgMzQuNTU5OUMyMjQuNzY2IDMwLjEzNzggMjIxLjM2IDI2LjQ0MTEgMjE3LjEzIDIzLjkxOTlDMjEyLjc5MyAyMS40MDk1IDIwNy44NTQgMjAuMTI4MyAyMDIuODQ0IDIwLjIxMzhDMTk3Ljc3NiAyMC4xMjMxIDE5Mi43NzggMjEuNDAzNiAxODguMzc4IDIzLjkxOTlDMTg0LjEyIDI2LjQyNTggMTgwLjY5MSAzMC4xMjUgMTc4LjUxNCAzNC41NTk5QzE3Ni4xOTEgMzkuNjIzMiAxNzQuOTg4IDQ1LjEyODcgMTc0Ljk4OCA1MC42OTk5QzE3NC45ODggNTYuMjcxIDE3Ni4xOTEgNjEuNzc2NSAxNzguNTE0IDY2LjgzOThaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDA2LjE0MiA3Mi45OTcxQzQwMi42NzggNzkuMzMxNCAzOTcuMzg3IDg0LjQ3NjEgMzkwLjk1OCA4Ny43NjE4QzM4NC4zMDIgOTEuMjcwNSAzNzYuMzUyIDkzLjAyNCAzNjcuMTA3IDkzLjAyMjVIMzM4Ljg5M1Y4LjYxNzE5SDM2Ny4xMDdDMzc2LjM1MyA4LjYxNzE5IDM4NC4zMDMgMTAuMzUwOCAzOTAuOTU4IDEzLjgxNzlDMzk3LjM3OSAxNy4wNTkxIDQwMi42NzEgMjIuMTYzNSA0MDYuMTQyIDI4LjQ2MjlDNDA5LjYwOSAzNC43NjAzIDQxMS4zNDIgNDIuMTcyNyA0MTEuMzQxIDUwLjcwMDJDNDExLjM0MSA1OS4yMjk1IDQwOS42MDggNjYuNjYxOCA0MDYuMTQyIDcyLjk5NzFaTTM4OS4zNDUgNzIuODE4NEMzOTQuNzYzIDY3LjU1NzcgMzk3LjQ3MyA2MC4xODQ5IDM5Ny40NzQgNTAuNzAwMkMzOTcuNDc0IDQxLjIxNTkgMzk0Ljc2NCAzMy44NDM0IDM4OS4zNDUgMjguNTgyNkMzODMuOTIzIDIzLjMyMjYgMzc2LjE1MiAyMC42OTI0IDM2Ni4wMzEgMjAuNjkxOUgzNTIuNTIyVjgwLjcwOEgzNjYuMDMxQzM3Ni4xNTIgODAuNzA4IDM4My45MjMgNzguMDc4MSAzODkuMzQ1IDcyLjgxODRIMzg5LjM0NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00MzMuNTc4IDguNjE3MTlMNDU3Ljg0OCA3OC40MzY2TDQ4Mi4yMzcgOC42MTcxOUg0OTcuMDYyTDQ2Ni41NzYgOTMuMDIyNUg0NDkuMTJMNDE4Ljc1NSA4LjYxNzE5SDQzMy41NzhaIiBmaWxsPSIjMUZCQ0ZGIi8+CjxwYXRoIGQ9Ik01MDcuNzAxIDIuMjgxMjdDNTA5LjQzIDAuNzE2NjggNTExLjcwOCAtMC4wOTk5NTQ2IDUxNC4wMzcgMC4wMDk3ODc4QzUxNi4zODQgLTAuMDkyNTIwNCA1MTguNjc4IDAuNzIyMTAyIDUyMC40MzQgMi4yODEyN0M1MjEuMjMxIDMuMDA1NTggNTIxLjg2MiAzLjg5MzEgNTIyLjI4NSA0Ljg4MzQxQzUyMi43MDggNS44NzM3MyA1MjIuOTEzIDYuOTQzNTcgNTIyLjg4NSA4LjAyMDA3QzUyMi45MiA5LjA4IDUyMi43MTkgMTAuMTM0NSA1MjIuMjk1IDExLjEwNjVDNTIxLjg3MSAxMi4wNzg1IDUyMS4yMzUgMTIuOTQzNiA1MjAuNDM0IDEzLjYzODdDNTE4LjY0NSAxNS4xMjg0IDUxNi4zNjMgMTUuODk2IDUxNC4wMzcgMTUuNzkxMUM1MTEuNzI5IDE1LjkwMzMgNTA5LjQ2NCAxNS4xMzM5IDUwNy43MDEgMTMuNjM4N0M1MDYuOTE1IDEyLjkzNDggNTA2LjI5MyAxMi4wNjY2IDUwNS44OCAxMS4wOTU2QzUwNS40NjcgMTAuMTI0NyA1MDUuMjcyIDkuMDc0NjcgNTA1LjMxIDguMDIwMDdDNTA1LjI4IDYuOTQ4NzUgNTA1LjQ3NyA1Ljg4MzI1IDUwNS44OSA0Ljg5Mzk3QzUwNi4zMDIgMy45MDQ3IDUwNi45MTkgMy4wMTQxOSA1MDcuNzAxIDIuMjgxMjdaTTUyMC44NTEgMjcuMTQ4NVY5My4wMjNINTA3LjIyM1YyNy4xNDg1SDUyMC44NTFaIiBmaWxsPSIjMUZCQ0ZGIi8+CjxwYXRoIGQ9Ik01NzcuNTc5IDMyLjIyOTNDNTgyLjI5NCAzNi4yNjc3IDU4NS4zNCA0MS45MTI5IDU4Ni4xMjggNDguMDcwMkg1NzMuMjE2QzU3Mi43ODMgNDQuNzE4NiA1NzEuMTQ4IDQxLjYzODUgNTY4LjYxNCAzOS40MDI3QzU2Ni4xMDMgMzcuMjExMyA1NjIuNzc1IDM2LjExNTMgNTU4LjYzIDM2LjExNDZDNTU1LjIwMiAzNi4xMTQ2IDU1Mi41NTIgMzYuOTMxNyA1NTAuNjggMzguNTY1OEM1NDkuNzQ2IDM5LjM5MjEgNTQ5LjAxIDQwLjQxNjkgNTQ4LjUyMyA0MS41NjVDNTQ4LjAzNyA0Mi43MTMxIDU0Ny44MTQgNDMuOTU1NSA1NDcuODcxIDQ1LjIwMUM1NDcuODMzIDQ2LjEzNDQgNTQ3Ljk5NSA0Ny4wNjUxIDU0OC4zNDUgNDcuOTMwOUM1NDguNjk2IDQ4Ljc5NjggNTQ5LjIyNyA0OS41Nzc5IDU0OS45MDQgNTAuMjIyQzU1MS4zNjkgNTEuNTYzOCA1NTMuMSA1Mi41ODIxIDU1NC45ODUgNTMuMjEwOEM1NTcuODMxIDU0LjE1NjMgNTYwLjcyNCA1NC45NTQ0IDU2My42NTIgNTUuNjAxOUM1NjcuNzM1IDU2LjQ2NzQgNTcxLjc1MSA1Ny42MjY0IDU3NS42NjggNTkuMDY5N0M1NzguNzM1IDYwLjI2NiA1ODEuNDUgNjIuMjE5NiA1ODMuNTU4IDY0Ljc0ODRDNTg1Ljc0OSA2Ny4zMzkyIDU4Ni44NDQgNzAuODY1OSA1ODYuODQ1IDc1LjMyODRDNTg2LjkxNCA3Ny44OTUgNTg2LjM4MiA4MC40NDIxIDU4NS4yOTMgODIuNzY2OUM1ODQuMjAzIDg1LjA5MTcgNTgyLjU4NSA4Ny4xMjk4IDU4MC41NjkgODguNzE5QzU3Ni4zODQgOTIuMTQ2NyA1NzAuNzQ1IDkzLjg2MDIgNTYzLjY1MiA5My44NTk2QzU1NS40NDIgOTMuODU5NiA1NDguODA3IDkxLjk0NjggNTQzLjc0NyA4OC4xMjEzQzUzOC42ODQgODQuMjk1MiA1MzUuNjM1IDc4Ljk1NTIgNTM0LjYgNzIuMTAxM0g1NDcuODdDNTQ4LjAyOSA3My44MDU2IDU0OC41MzUgNzUuNDU5NCA1NDkuMzU3IDc2Ljk2MDVDNTUwLjE4IDc4LjQ2MTYgNTUxLjMwMSA3OS43NzgyIDU1Mi42NTIgODAuODI4OUM1NTUuNDQxIDgzLjA2MTMgNTU5LjEwOCA4NC4xNzcyIDU2My42NTEgODQuMTc2NUM1NjYuNDU2IDg0LjMzNzEgNTY5LjIxNSA4My40MTc0IDU3MS4zNjIgODEuNjA2NUM1NzIuMjc1IDgwLjc4OTEgNTcyLjk5OSA3OS43ODI5IDU3My40ODQgNzguNjU3OUM1NzMuOTY5IDc3LjUzMjggNTc0LjIwNCA3Ni4zMTU3IDU3NC4xNzIgNzUuMDkwOUM1NzQuMjIyIDc0LjA3NDIgNTc0LjA1NiA3My4wNTg0IDU3My42ODUgNzIuMTEwNEM1NzMuMzE1IDcxLjE2MjQgNTcyLjc0NyA3MC4zMDM3IDU3Mi4wMjEgNjkuNTkwOUM1NzAuNDcgNjguMTY4MiA1NjguNjM3IDY3LjA4ODcgNTY2LjY0MSA2Ni40MjI5QzU2My43NDIgNjUuNDY2MSA1NjAuNzg3IDY0LjY4NzYgNTU3Ljc5MyA2NC4wOTE5QzU1My44NDIgNjMuMjE4NCA1NDkuOTQ5IDYyLjEwMDQgNTQ2LjEzNyA2MC43NDQyQzU0My4xNTQgNTkuNjMyNiA1NDAuNTE1IDU3Ljc1NjYgNTM4LjQ4NSA1NS4zMDQyQzUzNi4zNzMgNTIuNzkzNCA1MzUuMzE3IDQ5LjM4NjIgNTM1LjMxNyA0NS4wODI1QzUzNS4yNDQgNDIuNDg5NSA1MzUuNzcyIDM5LjkxNDcgNTM2Ljg2MSAzNy41NjA0QzUzNy45NSAzNS4yMDYgNTM5LjU3IDMzLjEzNjEgNTQxLjU5NCAzMS41MTMyQzU0NS43NzggMjguMDQ1OSA1NTEuNTc3IDI2LjMxMjMgNTU4Ljk4OSAyNi4zMTI1QzU2Ni43MTkgMjYuMzExOCA1NzIuOTE2IDI4LjI4NCA1NzcuNTc5IDMyLjIyOTNaIiBmaWxsPSIjMUZCQ0ZGIi8+CjxwYXRoIGQ9Ik02MDAuOTUzIDIuMjgxMjhDNjAyLjY4MiAwLjcxNjY3IDYwNC45NiAtMC4wOTk5NjkgNjA3LjI4OSAwLjAwOTc5MDY1QzYwOS42MzUgLTAuMDkyNTM4NyA2MTEuOTI5IDAuNzIyMDg2IDYxMy42ODYgMi4yODEyOEM2MTQuNDgzIDMuMDA1NTcgNjE1LjExNCAzLjg5MzEgNjE1LjUzNyA0Ljg4MzQyQzYxNS45NiA1Ljg3MzczIDYxNi4xNjUgNi45NDM1NiA2MTYuMTM3IDguMDIwMDdDNjE2LjE3MiA5LjA4MDAxIDYxNS45NzEgMTAuMTM0NSA2MTUuNTQ3IDExLjEwNjVDNjE1LjEyMyAxMi4wNzg2IDYxNC40ODcgMTIuOTQzNyA2MTMuNjg2IDEzLjYzODdDNjExLjg5NiAxNS4xMjg0IDYwOS42MTUgMTUuODk2MSA2MDcuMjg5IDE1Ljc5MTFDNjA0Ljk4MSAxNS45MDMzIDYwMi43MTYgMTUuMTMzOSA2MDAuOTUzIDEzLjYzODdDNjAwLjE2NyAxMi45MzQ4IDU5OS41NDUgMTIuMDY2NiA1OTkuMTMyIDExLjA5NTZDNTk4LjcxOSAxMC4xMjQ3IDU5OC41MjQgOS4wNzQ2OCA1OTguNTYyIDguMDIwMDdDNTk4LjUzMiA2Ljk0ODc2IDU5OC43MjkgNS44ODMyNSA1OTkuMTQyIDQuODkzOThDNTk5LjU1NCAzLjkwNDcgNjAwLjE3MSAzLjAxNDE5IDYwMC45NTMgMi4yODEyOFpNNjE0LjEwMyAyNy4xNDg1VjkzLjAyM0g2MDAuNDc1VjI3LjE0ODVINjE0LjEwM1oiIGZpbGw9IiMxRkJDRkYiLz4KPHBhdGggZD0iTTY3Ny45NDYgMzAuMzc2M0M2ODIuOTg5IDMzLjAzMTEgNjg3LjE0NSAzNy4xMDQgNjg5LjkwMSA0Mi4wOTI2QzY5Mi43MyA0Ny42Njg1IDY5NC4yMDQgNTMuODMzIDY5NC4yMDQgNjAuMDg1NkM2OTQuMjA0IDY2LjMzODIgNjkyLjczIDcyLjUwMjYgNjg5LjkwMSA3OC4wNzg1QzY4Ny4xNDYgODMuMDY3OSA2ODIuOTkgODcuMTQxMiA2NzcuOTQ2IDg5Ljc5NTNDNjcyLjYzMyA5Mi41NTU5IDY2Ni43MTcgOTMuOTUyNiA2NjAuNzMgOTMuODU5N0M2NTQuNzYxIDkzLjk1NzkgNjQ4Ljg2MyA5Mi41NjA3IDY0My41NzMgODkuNzk1M0M2MzguNTM0IDg3LjEwOCA2MzQuMzgxIDgzLjAxNzUgNjMxLjYxOCA3OC4wMTg5QzYyOC43NTEgNzIuNDY1NCA2MjcuMjU0IDY2LjMwNiA2MjcuMjU0IDYwLjA1NThDNjI3LjI1NCA1My44MDU1IDYyOC43NTEgNDcuNjQ2MSA2MzEuNjE4IDQyLjA5MjZDNjM0LjM5NiAzNy4xMjAzIDYzOC41NDYgMzMuMDUyOCA2NDMuNTczIDMwLjM3NjNDNjQ4Ljg2NCAyNy42MTE0IDY1NC43NjEgMjYuMjE0IDY2MC43MyAyNi4zMTE0QzY2Ni43MTcgMjYuMjE5NCA2NzIuNjMyIDI3LjYxNjIgNjc3Ljk0NiAzMC4zNzYzWk02NTEuMDQ2IDQwLjUzODRDNjQ4IDQyLjIzMjMgNjQ1LjUyNSA0NC43OTEgNjQzLjkzMiA0Ny44OTFDNjQyLjE2MSA1MS43MDE3IDY0MS4yNDMgNTUuODUzMyA2NDEuMjQzIDYwLjA1NTZDNjQxLjI0MyA2NC4yNTc5IDY0Mi4xNjEgNjguNDA5NSA2NDMuOTMyIDcyLjIyMDFDNjQ1LjUzNiA3NS4yOTY0IDY0OC4wMSA3Ny44MzI4IDY1MS4wNDYgNzkuNTEzQzY1NC4wMzIgODEuMDgzOCA2NTcuMzU1IDgxLjkwNDYgNjYwLjczIDgxLjkwNDZDNjY0LjEwNCA4MS45MDQ2IDY2Ny40MjcgODEuMDgzOCA2NzAuNDE0IDc5LjUxM0M2NzMuNDQ5IDc3LjgzMjUgNjc1LjkyMyA3NS4yOTYzIDY3Ny41MjcgNzIuMjIwMUM2NzkuMjk5IDY4LjQwOTYgNjgwLjIxOCA2NC4yNTggNjgwLjIxOCA2MC4wNTU2QzY4MC4yMTggNTUuODUzMSA2NzkuMjk5IDUxLjcwMTUgNjc3LjUyNyA0Ny44OTFDNjc1LjkzNSA0NC43OTEyIDY3My40NTkgNDIuMjMyNiA2NzAuNDE0IDQwLjUzODRDNjY3LjQyNyAzOC45Njc5IDY2NC4xMDQgMzguMTQ3MyA2NjAuNzMgMzguMTQ3M0M2NTcuMzU2IDM4LjE0NzMgNjU0LjAzMiAzOC45Njc5IDY1MS4wNDYgNDAuNTM4NFoiIGZpbGw9IiMxRkJDRkYiLz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzIxNTVfMzA4OTApIj4KPHBhdGggZD0iTTMuNDQwOTIgNjMuOTkxOUMxLjkwOTU3IDYxLjMyNTMgMy44MzQ1OCA1OCA2LjkwOTY2IDU4SDU1LjcwNDJDNTcuMTI1OSA1OCA1OC40NDA5IDU4Ljc1NDcgNTkuMTU4IDU5Ljk4MjRMODMuOTg0OCAxMDIuNDgyQzg1LjU0MjUgMTA1LjE0OSA4My42MTkxIDEwOC41IDgwLjUzMDkgMTA4LjVIMzEuMzE1NkMyOS44ODMyIDEwOC41IDI4LjU2MDIgMTA3LjczNCAyNy44NDY5IDEwNi40OTJMMy40NDA5MiA2My45OTE5WiIgZmlsbD0iI0ZEOUQ1MiIvPgo8cGF0aCBkPSJNOTAuOTMxNyA5Ljk0ODY4QzkyLjQ3NTEgNy4yOTYwNSA5Ni4zMDc0IDcuMjk3ODcgOTcuODQ4MyA5Ljk1MTk3TDEyMi41ODUgNTIuNTYwN0MxMjMuMzAyIDUzLjc5NDUgMTIzLjMwNyA1NS4zMTY2IDEyMi41OTggNTYuNTU1TDk3Ljc0NzQgMTAwLjAwMUM5Ni4yMTcxIDEwMi42NzcgOTIuMzYzNCAxMDIuNjg5IDkwLjgxNiAxMDAuMDI0TDY1Ljg2NTMgNTcuMDQ3MkM2NS4xNDM2IDU1LjgwNDEgNjUuMTQ0NCA1NC4yNjk1IDY1Ljg2NzIgNTMuMDI3Mkw5MC45MzE3IDkuOTQ4NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNODAuNjg5MSAwLjMwNjY0MUM4My43NzIxIDAuMzA2NjQxIDg1LjY5NjEgMy42NDc0MiA4NC4xNDg5IDYuMzE0MDdMNTkuNDUzOSA0OC44NzU5QzU4LjczODIgNTAuMTA5MyA1Ny40MjAxIDUwLjg2ODQgNTUuOTk0MSA1MC44Njg0TDcuMTQ0NDEgNTAuODY4NEM0LjAxODA4IDUwLjg2ODQgMi4xMDAyMSA0Ny40NDI5IDMuNzM0MzIgNDQuNzc3N0wyOS44Mjk0IDIuMjE1ODhDMzAuNTU2NyAxLjAyOTY4IDMxLjg0ODEgMC4zMDY2NDEgMzMuMjM5NSAwLjMwNjY0Mkw4MC42ODkxIDAuMzA2NjQxWiIgZmlsbD0iIzFGQkNGRiIvPgo8L2c+CjxwYXRoIGQ9Ik0zMTEuMzM4IDMwLjM3NjNDMzE1LjkyMiAzMy4xNzc1IDMxOS41OTcgMzcuMjQ2OSAzMjEuOTE4IDQyLjA5MjZDMzI0LjQ0IDQ3Ljc1NTggMzI1Ljc0NCA1My44ODYgMzI1Ljc0NCA2MC4wODU1QzMyNS43NDQgNjYuMjg1IDMyNC40NCA3Mi40MTUyIDMyMS45MTggNzguMDc4NEMzMTkuNTk4IDgyLjkyNDcgMzE1LjkyMyA4Ni45OTQ2IDMxMS4zMzggODkuNzk1MkMzMDYuNjkxIDkyLjU0MzcgMzAxLjM3MyA5My45NTA2IDI5NS45NzUgOTMuODU5NkMyOTAuNTM3IDk0LjAxOTEgMjg1LjE4NiA5Mi40NzIyIDI4MC42NzIgODkuNDM1OUMyNzYuNTI5IDg2LjU5NTUgMjczLjQyMyA4Mi40ODI3IDI3MS44MjUgNzcuNzJWOTMuMDIyOEgyNTguMTk2VjQuNTUyNzNIMjcxLjgyNVY0Mi40NTExQzI3My40MjQgMzcuNjg4OSAyNzYuNTMgMzMuNTc2NCAyODAuNjcyIDMwLjczNDhDMjg1LjE4NyAyNy42OTk3IDI5MC41MzggMjYuMTUzMSAyOTUuOTc1IDI2LjMxMTZDMzAxLjM3MyAyNi4yMjE0IDMwNi42OTEgMjcuNjI4MyAzMTEuMzM4IDMwLjM3NjNaTTI4MS41MDkgNDAuOTU2OEMyNzguNDQ4IDQyLjc4MzggMjc1Ljk2MiA0NS40MzUzIDI3NC4zMzYgNDguNjA4MkMyNzIuNjA1IDUyLjE3NiAyNzEuNzA2IDU2LjA5IDI3MS43MDYgNjAuMDU1N0MyNzEuNzA2IDY0LjAyMTMgMjcyLjYwNSA2Ny45MzUzIDI3NC4zMzYgNzEuNTAzMkMyNzUuOTc1IDc0LjY1MTQgMjc4LjQ1OSA3Ny4yODA0IDI4MS41MDkgNzkuMDk1QzI4NC42MjcgODAuOTExOCAyODguMTgyIDgxLjg0MTggMjkxLjc5MSA4MS43ODQ0QzI5Ny44NDcgODEuNzg0NCAzMDIuNzA5IDc5Ljg1MTggMzA2LjM3NiA3NS45ODY2QzMxMC4wNDEgNzIuMTIxMyAzMTEuODc1IDY2LjgwMSAzMTEuODc2IDYwLjAyNTZDMzExLjg3NiA1My4zMzAzIDMxMC4wNDMgNDguMDMgMzA2LjM3NiA0NC4xMjQ4QzMwMi43MDkgNDAuMjIwNiAyOTcuODQ4IDM4LjI2NzkgMjkxLjc5MSAzOC4yNjY4QzI4OC4xODIgMzguMjA5MyAyODQuNjI3IDM5LjEzOTUgMjgxLjUwOSA0MC45NTY4VjQwLjk1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzYyLjU4OSAzMy40ODU2Qzc2Ny4yMSAzOC40Mjg2IDc2OS41MjEgNDUuNDgyMSA3NjkuNTIzIDU0LjY0NjNWOTMuMDIzN0g3NTUuODk0VjU2LjA4MTNDNzU1Ljg5NCA1MC4xODM5IDc1NC4zNzkgNDUuNjIwOSA3NTEuMzUxIDQyLjM5MjNDNzQ4LjMyMSAzOS4xNjQzIDc0NC4xNzYgMzcuNTUwNCA3MzguOTE3IDM3LjU1MDZDNzMzLjQ5NiAzNy41NTA2IDcyOS4xNTMgMzkuMjg0IDcyNS44ODYgNDIuNzUwNkM3MjIuNjE2IDQ2LjIxOCA3MjAuOTgyIDUxLjI5OSA3MjAuOTg0IDU3Ljk5MzhWOTMuMDIzOEg3MDcuMzU0VjI3LjE0OTJINzIwLjk4M1Y0MS42MTVDNzIyLjU1OSAzNi45MDM3IDcyNS42NzYgMzIuODYwNSA3MjkuODMxIDMwLjEzOEM3MzQuMTA0IDI3LjM5MDkgNzM5LjA5OCAyNS45NzYgNzQ0LjE3NyAyNi4wNzNDNzUxLjgyOSAyNi4wNzMgNzU3Ljk2NiAyOC41NDM5IDc2Mi41ODkgMzMuNDg1NloiIGZpbGw9IiMxRkJDRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMTU1XzMwODkwIj4KPHJlY3Qgd2lkdGg9Ijc3MCIgaGVpZ2h0PSIxMDkiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMjE1NV8zMDg5MCI+CjxyZWN0IHdpZHRoPSIxMjEiIGhlaWdodD0iMTIxIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAtNikiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
const generateSize = (value) => {
  switch (value) {
    case "small":
      return "20px";
    case "medium":
      return "32px";
    default:
      return "32px";
  }
};
const Logo = ({
  size = "medium",
  type = "light"
}) => /* @__PURE__ */ jsx("img", {
  height: generateSize(size),
  src: type === "dark" ? darkLogo : logo,
  alt: "QbDVision Logo"
});
const card = "card___Tv0v-";
const withHoverEffect = "withHoverEffect___n7-60";
const style$7 = {
  card,
  withHoverEffect
};
const Card = ({
  withHoverEffect: withHoverEffect2,
  children
}) => {
  return /* @__PURE__ */ jsx("article", {
    className: c(style$7.card, {
      [style$7.withHoverEffect]: withHoverEffect2
    }),
    children
  });
};
const buttonGroup = "button-group___zQdnW";
const style$6 = {
  "button-group": "button-group___zQdnW",
  buttonGroup
};
const ButtonGroup = ({
  children
}) => /* @__PURE__ */ jsx("div", {
  className: style$6.buttonGroup,
  children
});
const dropdown = "dropdown___PscgQ";
const isIcon = "isIcon___RptAc";
const menu = "menu___RcKEp";
const list = "list___KTdJj";
const item = "item___uCZSI";
const style$5 = {
  dropdown,
  isIcon,
  menu,
  list,
  item
};
const DropdownButton = ({
  id,
  label: label2,
  options,
  onOptionsSelect,
  isIcon: isIcon2,
  ...rest
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: c([style$5.dropdown, {
      [style$5.isIcon]: isIcon2
    }]),
    children: /* @__PURE__ */ jsx(Menu, {
      className: style$5.menu,
      menuClassName: style$5.list,
      menuButton: isIcon2 ? /* @__PURE__ */ jsx(IconButton$1, {
        icon: faEllipsisVertical,
        id: `${id}DropdownButton`,
        type: "ghost",
        ...rest
      }) : /* @__PURE__ */ jsx(Button$1, {
        id: `${id}DropdownButton`,
        label: label2,
        hasArrow: true,
        ...rest
      }),
      children: options.map((item2) => /* @__PURE__ */ createElement(MenuItem, {
        ...id && {
          id: `${id}_${item2.key}`
        },
        className: style$5.item,
        key: item2.key,
        value: item2.key,
        disabled: item2.disabled,
        onClick: (e) => onOptionsSelect(e.syntheticEvent)
      }, item2.value))
    })
  });
};
const NavBar$1 = "NavBar___vkkwh";
const navBar = "NavBar___vkkwh";
const breadcrumbContent = "breadcrumb-content___JnGq8";
const logoContent = "Logo-content___uGsez";
const leftContent$1 = "left-content___VwsNj";
const style$4 = {
  NavBar: NavBar$1,
  navBar,
  "breadcrumb-content": "breadcrumb-content___JnGq8",
  breadcrumbContent,
  "Logo-content": "Logo-content___uGsez",
  logoContent,
  "left-content": "left-content___VwsNj",
  leftContent: leftContent$1
};
const NavBar = () => /* @__PURE__ */ jsxs("header", {
  className: style$4.NavBar,
  children: [/* @__PURE__ */ jsxs("div", {
    className: style$4.leftContent,
    children: [/* @__PURE__ */ jsx(Logo, {}), /* @__PURE__ */ jsx("div", {
      className: style$4.breadcrumbContent,
      children: "All Projects / PRJ-4 - Drug Substance Project"
    })]
  }), /* @__PURE__ */ jsx("div", {
    className: style$4.rightContent,
    children: "Rockets R US"
  })]
});
const wrapper = "wrapper___GDopq";
const wrapperHasMargin = "wrapper--hasMargin___Btpj-";
const separator = "separator___01qMZ";
const style$3 = {
  wrapper,
  "wrapper--hasMargin": "wrapper--hasMargin___Btpj-",
  wrapperHasMargin,
  separator
};
const Breadcrumb = ({
  links,
  hasSeparator
}) => {
  return /* @__PURE__ */ jsx(Fragment, {
    children: links.map((item2, index) => /* @__PURE__ */ jsxs("div", {
      className: c(style$3.wrapper, {
        [style$3.wrapperHasMargin]: !hasSeparator
      }),
      children: [index !== 0 && hasSeparator && /* @__PURE__ */ jsx("span", {
        className: style$3.separator,
        children: " / "
      }), /* @__PURE__ */ jsx(Link, {
        href: item2.url,
        label: item2.label
      })]
    }, item2.label + item2.url))
  });
};
const RecordHeader$1 = "RecordHeader___WjOtW";
const recordHeader = "RecordHeader___WjOtW";
const isGray = "isGray___PR13C";
const backButtonLink = "backButtonLink___YY41-";
const leftContent = "leftContent___LpPqV";
const displayName = "displayName___gY-Cx";
const currentState = "currentState___--fM4";
const row = "row___5C8g-";
const label = "label___-dltC";
const icon$1 = "icon___e-vFL";
const style$2 = {
  RecordHeader: RecordHeader$1,
  recordHeader,
  isGray,
  backButtonLink,
  leftContent,
  displayName,
  currentState,
  row,
  label,
  icon: icon$1
};
const RecordHeader = ({
  title: title2,
  currentState: currentState2,
  breadcrumb,
  label: label2,
  backButtonLink: backButtonLink2,
  isTitleGray
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: style$2.RecordHeader,
    children: [backButtonLink2 && /* @__PURE__ */ jsx("a", {
      href: backButtonLink2,
      className: style$2.backButtonLink,
      children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
        className: style$2.icon,
        icon: faArrowLeft
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: style$2.leftContent,
      children: [/* @__PURE__ */ jsxs("div", {
        className: style$2.row,
        children: [/* @__PURE__ */ jsx("h3", {
          className: c(style$2.displayName, {
            [style$2.isGray]: isTitleGray
          }),
          children: title2
        }), label2 && /* @__PURE__ */ jsx("span", {
          className: style$2.label,
          children: label2
        })]
      }), (breadcrumb == null ? void 0 : breadcrumb.length) && /* @__PURE__ */ jsx(Breadcrumb, {
        links: breadcrumb
      })]
    }), currentState2 && /* @__PURE__ */ jsx("div", {
      className: style$2.currentState,
      children: currentState2
    })]
  });
};
const convertToId = (someString) => {
  return (someString || "").toString().replace(/[^a-z0-9]/gim, "");
};
const capitalize = (wordToCapitalize) => {
  return wordToCapitalize ? wordToCapitalize.charAt(0).toUpperCase() + wordToCapitalize.slice(1) : wordToCapitalize;
};
const addCommasToNumber = (number) => {
  return number && Number(number).toLocaleString();
};
const convertToCamelCaseId = (someString) => {
  let returnVal = (someString || "").toString().replace(/[^a-z0-9 ]/gim, "");
  returnVal = returnVal.split(/\s+/).map((w) => capitalize(w)).join("");
  returnVal = returnVal.charAt(0).toLowerCase() + returnVal.slice(1);
  returnVal = convertToId(returnVal);
  return returnVal;
};
const InfoCard$1 = "InfoCard___2OPaP";
const infoCard = "InfoCard___2OPaP";
const icon = "icon___U2spx";
const title = "title___9jkjA";
const count = "count___tWK-D";
const line = "line___WdF0p";
const detailsLine = "detailsLine___2datd";
const detailsLineTitle = "detailsLineTitle___JXsMx";
const detailsLineValue = "detailsLineValue___RfGUh";
const style$1 = {
  InfoCard: InfoCard$1,
  infoCard,
  icon,
  title,
  count,
  line,
  detailsLine,
  detailsLineTitle,
  detailsLineValue
};
const InfoCard = ({
  id,
  icon: icon2,
  alt,
  data,
  onInfoCardClick,
  isLoading
}) => {
  var _a, _b, _c;
  return /* @__PURE__ */ jsx(Card, {
    withHoverEffect: true,
    children: /* @__PURE__ */ jsxs("div", {
      id: `${id}InfoCard`,
      className: style$1.infoCard,
      role: "presentation",
      onClick: onInfoCardClick,
      children: [/* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("img", {
          src: icon2,
          className: style$1.icon,
          alt
        })
      }), /* @__PURE__ */ jsx("div", {
        className: c(style$1.count, {
          skeleton: isLoading
        }),
        children: addCommasToNumber((_a = data == null ? void 0 : data.count) == null ? void 0 : _a.value)
      }), /* @__PURE__ */ jsx("div", {
        className: style$1.title,
        children: /* @__PURE__ */ jsx("a", {
          id: `${id}Link`,
          onClick: onInfoCardClick,
          children: (_b = data == null ? void 0 : data.count) == null ? void 0 : _b.title
        })
      }), /* @__PURE__ */ jsx("div", {
        className: style$1.line
      }), (_c = data == null ? void 0 : data.stats) == null ? void 0 : _c.map((instance) => {
        return /* @__PURE__ */ jsxs("div", {
          role: "presentation",
          id: instance.id,
          className: style$1.detailsLine,
          onClick: instance.onClick,
          children: [/* @__PURE__ */ jsx("div", {
            className: style$1.detailsLineTitle,
            children: instance.title
          }), /* @__PURE__ */ jsx("div", {
            className: c(style$1.detailsLineValue, {
              skeleton: isLoading
            }),
            children: addCommasToNumber(instance.count)
          })]
        }, instance.id);
      })]
    })
  });
};
const quickAccessCard = "quickAccessCard___-jS20";
const quickAccessCardTitle = "quickAccessCardTitle___Lb6IV";
const quickAccessCardDetails = "quickAccessCardDetails___r0Z2s";
const style = {
  quickAccessCard,
  quickAccessCardTitle,
  quickAccessCardDetails
};
const QuickAccessCard = ({
  object,
  className,
  isLoading
}) => {
  const handleQuickAccessCardClick = (event) => {
    event.stopPropagation();
    window.open(object.url, "_self");
  };
  const pluralizedTitle = object.title.at(-1) !== "s" ? `${object.title}s` : object.title;
  const generateID = `${convertToCamelCaseId(pluralizedTitle)}Link`;
  return /* @__PURE__ */ jsx(Card, {
    withHoverEffect: true,
    children: /* @__PURE__ */ jsxs("div", {
      className: `${style.quickAccessCard} ${className || ""}`,
      onClick: handleQuickAccessCardClick,
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("div", {
          className: c(style.quickAccessCardTitle, {
            skeleton: isLoading
          }),
          children: addCommasToNumber(object.count)
        }), /* @__PURE__ */ jsx("div", {
          className: style.quickAccessCardDetails,
          children: /* @__PURE__ */ jsx("a", {
            id: generateID,
            href: object.url,
            onClick: handleQuickAccessCardClick,
            children: object.title
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("img", {
          src: object.icon.image,
          width: object.icon.width,
          height: object.icon.height,
          alt: object.title
        })
      })]
    })
  });
};
export {
  Breadcrumb,
  Button$1 as Button,
  ButtonGroup,
  Card,
  DropdownButton,
  IconButton$1 as IconButton,
  InfoCard,
  Link,
  Logo,
  NavBar,
  QuickAccessCard,
  RecordHeader,
  Spinner,
  tokens as designTokens
};
//# sourceMappingURL=component-library.es.js.map
