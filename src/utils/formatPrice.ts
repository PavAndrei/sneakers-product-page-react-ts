import { PriceType } from "../interfaces";

export const formatPrice = (num: PriceType) => {
  if (typeof num !== "number") {
    return;
  }
  return num.toFixed(2);
};
