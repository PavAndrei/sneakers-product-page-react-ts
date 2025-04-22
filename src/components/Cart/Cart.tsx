import { useRef } from "react";
import { useProductPageContext } from "../../context/ProductPageContext";
import { useClickOutside } from "../../hooks/useClickOutside";

import { CartList } from "../CartList/CartList";

import styles from "./styles.module.css";

export const Cart = () => {
  const { cartData, toggleCartVisibility, isCartVisible } =
    useProductPageContext();

  const ref = useRef(null);

  useClickOutside(ref, toggleCartVisibility, isCartVisible);

  return (
    <div ref={ref} className={styles.cart}>
      <h3 className={styles.title}>Cart</h3>
      {cartData?.length != 0 ? (
        <CartList />
      ) : (
        <div className={styles.message}>Your cart is empty</div>
      )}
    </div>
  );
};
