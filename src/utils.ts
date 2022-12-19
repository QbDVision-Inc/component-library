export const addCommasToNumber = (number?: number) => {
  return number && Number(number).toLocaleString();
};
