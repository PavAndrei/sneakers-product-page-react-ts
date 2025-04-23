import styles from "./styles.module.css";

import { CartWrapper } from "../CartWrapper/CartWrapper";
import { useCartContext } from "../../context/CartContext";
import { CartList } from "../CartList/CartList";

export const Cart = () => {
  const { cartData } = useCartContext();

  return (
    <div className={styles.cart}>
      <h3 className={styles.title}>Cart</h3>
      {cartData?.length != 0 ? (
        <CartWrapper>
          <CartList />
          <button className={styles.btn}>Checkout</button>
        </CartWrapper>
      ) : (
        <div className={styles.message}>Your cart is empty</div>
      )}
    </div>
  );
};
