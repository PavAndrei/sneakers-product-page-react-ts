import { useProductPageContext } from "../../context/ProductPageContext";

import { CartList } from "../CartList/CartList";

import styles from "./styles.module.css";

export const Cart = () => {
  const { cartData } = useProductPageContext();

  console.log(cartData);

  return (
    <div className={styles.cart}>
      <h3 className={styles.title}>Cart</h3>
      {cartData?.length != 0 ? (
        <CartList />
      ) : (
        <div className={styles.message}>Your cart is empty</div>
      )}
    </div>
  );
};
