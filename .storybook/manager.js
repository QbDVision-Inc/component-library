import { addons } from "@storybook/addons";
import yourTheme from "./theme.js";
import favicon from "/public/logo-icon.svg";

const link = document.createElement("link");
//
link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", favicon);
document.head.appendChild(link);

addons.setConfig({
  theme: yourTheme,
});
