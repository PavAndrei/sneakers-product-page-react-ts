import { Avatars } from "../../assets";
import { useCartContext } from "../../context/CartContext";

import { IconCart } from "../../icons/IconCart";

import styles from "./styles.module.css";

export const HeaderActions = () => {
  const { toggleCartVisibility, calculateOrderQuantity } = useCartContext();

  const quantity = calculateOrderQuantity();

  return (
    <div className={styles.group}>
      <button
        aria-label="cart"
        onClick={toggleCartVisibility}
        className={styles.btn}
      >
        <IconCart color="" />
        {quantity != undefined && quantity > 0 && (
          <span className={styles.quantity}>{quantity}</span>
        )}
      </button>
      <button aria-label="avatar" className={styles.btn}>
        <img className={styles.img} src={Avatars.avatar} alt="avatar" />
      </button>
    </div>
  );
};
