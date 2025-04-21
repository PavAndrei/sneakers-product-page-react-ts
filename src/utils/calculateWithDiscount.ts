import { PriceType } from "../interfaces";

export const calculateWithDiscount = (
  price: PriceType,
  discount: PriceType,
  quantity: number
) => {
  if (price && discount) {
    return (price * quantity - (price / 100) * discount * quantity).toFixed(2);
  }
};
