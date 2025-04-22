import styles from "./styles.module.css";
import { CartList } from "../CartList/CartList";

export const CartWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <CartList />
      <button className={styles.btn}>Checkout</button>
    </div>
  );
};
