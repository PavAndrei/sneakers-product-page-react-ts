import { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

import styles from "./styles.module.css";

import { CartWrapper } from "../CartWrapper/CartWrapper";
import { useCartContext } from "../../context/CartContext";

export const Cart = () => {
  const ref = useRef(null);

  const { cartData, toggleCartVisibility, isCartVisible } = useCartContext();

  useClickOutside(ref, toggleCartVisibility, isCartVisible);

  return (
    <div ref={ref} className={styles.cart}>
      <h3 className={styles.title}>Cart</h3>
      {cartData?.length != 0 ? (
        <CartWrapper />
      ) : (
        <div className={styles.message}>Your cart is empty</div>
      )}
    </div>
  );
};
