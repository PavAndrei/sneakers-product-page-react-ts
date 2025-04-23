import { AnimatePresence, motion } from "framer-motion";
import { useCartContext } from "../../context/CartContext";
import { IconRemove } from "../../icons/IconRemove";
import { ICartItem } from "../../interfaces";
import { calculateWithDiscount } from "../../utils/calculateWithDiscount";
import { formatPrice } from "../../utils/formatPrice";

import styles from "./styles.module.css";

export const CartItem = ({
  id,
  image,
  title,
  price,
  quantity,
  discount,
}: ICartItem) => {
  const { removeItemFromCart } = useCartContext();

  return (
    <AnimatePresence mode="wait">
      {
        <motion.div
          key="modalWrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={styles.item}
        >
          <img className={styles.img} src={image} alt="photo" />
          <div className={styles.itemInfo}>
            <h4 className={styles.itemTitle}>{title}</h4>
            <div className={styles.price}>
              <span className={styles.priceItem}>
                ${formatPrice(price - (price / 100) * discount)}
              </span>
              <span className={styles.quantity}>x {quantity}</span>
              <span className={styles.total}>
                ${calculateWithDiscount(price, discount, quantity)}
              </span>
            </div>
          </div>
          <div
            onClick={() => removeItemFromCart(id)}
            className={styles.iconRemove}
          >
            <IconRemove />
          </div>
        </motion.div>
      }
    </AnimatePresence>
  );
};
