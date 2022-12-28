// @ts-ignore
import pluralizeLib from "pluralize";

const PLURALIZE_EXCEPTIONS_ARRAY: [string, string][] = [
  ["ProcessParameterToIQA", "ProcessParameterToIQAs"],
  ["ProcessParameterToIPA", "ProcessParameterToIPAs"],
  ["ProcessParameterToFQA", "ProcessParameterToFQAs"],
  ["ProcessParameterToFPA", "ProcessParameterToFPAs"],
  ["MaterialAttributeToFQA", "MaterialAttributeToFQAs"],
  ["MaterialAttributeToFPA", "MaterialAttributeToFPAs"],
  ["MaterialAttributeToIQA", "MaterialAttributeToIQAs"],
  ["MaterialAttributeToIPA", "MaterialAttributeToIPAs"],
  ["FQAToGeneralAttributeRisk", "FQAToGeneralAttributeRisks"],
  ["FPAToGeneralAttributeRisk", "FPAToGeneralAttributeRisks"],
  ["RMPToUncertainty", "RMPToUncertainties"],
  ["AcceptanceCriteriaRange", "AcceptanceCriteriaRanges"],
  ["Specification", "Specifications"],
];

const PLURALIZE_EXCEPTIONS = new Map(PLURALIZE_EXCEPTIONS_ARRAY);

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

export const pluralize: (
  nounToPluralize: string,
  count?: number | null
) => string = (nounToPluralize, count = null) => {
  if (!nounToPluralize) {
    throw new TypeError("Noun to pluralize cannot be null");
  }

  const firstFewChars = nounToPluralize.substring(0, 3);
  const lastFewChars = nounToPluralize.substring(
    nounToPluralize.length - 3,
    nounToPluralize.length
  );

  if (count !== null) {
    return pluralizeLib(nounToPluralize, count);
  }

  if (PLURALIZE_EXCEPTIONS.has(nounToPluralize)) {
    return PLURALIZE_EXCEPTIONS.get(nounToPluralize);
  }

  if (
    firstFewChars === firstFewChars.toUpperCase() &&
    lastFewChars === lastFewChars.toUpperCase()
  ) {
    // It's an acronym (i.e. IQA or IQAToFQA), so just add an "s"
    return `${nounToPluralize}s`;
  }

  return pluralizeLib(nounToPluralize);
};
