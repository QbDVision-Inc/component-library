export const convertToId = (someString: string) => {
  return (someString || "").toString().replace(/[^a-z0-9]/gim, "");
};

export const capitalize = (wordToCapitalize: string) => {
  return wordToCapitalize
    ? wordToCapitalize.charAt(0).toUpperCase() + wordToCapitalize.slice(1)
    : wordToCapitalize;
};

export const addCommasToNumber = (number?: number) => {
  return number && Number(number).toLocaleString();
};

export const convertToCamelCaseId = (someString?: string) => {
  let returnVal = (someString || "").toString().replace(/[^a-z0-9 ]/gim, "");
  returnVal = returnVal
    .split(/\s+/)
    .map((w: string) => capitalize(w))
    .join("");
  returnVal = returnVal.charAt(0).toLowerCase() + returnVal.slice(1);
  returnVal = convertToId(returnVal);
  return returnVal;
};
