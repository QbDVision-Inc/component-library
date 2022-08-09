import { Size, Type } from "./Button";

export const remapTypeValues = (value?: Type) => {
  // remap 'secondary' & 'ghost' values to 'default' & 'text'
  if (value === "secondary") return "default";
  if (value === "ghost") return "text";

  return value;
};

export const remapSizeValues = (value?: Size) => {
  // remap 'middle' value to 'large'
  if (value !== "small") return "large";

  return value;
};

export const generateVerticalPadding = (value: Size) => {
  let p = "8px";

  if (value === "small") {
    p = "5px";
  }

  return {
    paddingTop: p,
    paddingBottom: p,
  };
};
