import styles from "./styles.module.css";

import { CartWrapper } from "../CartWrapper/CartWrapper";
import { useCartContext } from "../../context/CartContext";
import { CartList } from "../CartList/CartList";
import { AnimatePresence, motion } from "framer-motion";

export const Cart = () => {
  const { cartData } = useCartContext();

  return (
    <AnimatePresence mode="wait">
      {cartData && (
        <motion.div
          key="modalWrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={styles.cart}
        >
          <h3 className={styles.title}>Cart</h3>
          {cartData?.length != 0 ? (
            <CartWrapper>
              <CartList />
              <button className={styles.btn}>Checkout</button>
            </CartWrapper>
          ) : (
            <div className={styles.message}>Your cart is empty</div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
