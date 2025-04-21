import { useProductPageContext } from "../../context/ProductPageContext";
import { IconRemove } from "../../icons/IconRemove";
import { ICartItem } from "../../interfaces";
import { formatPrice } from "../../utils/formatPrice";

import styles from "./styles.module.css";

export const CartItem = ({ id, image, title, price, quantity }: ICartItem) => {
  const { removeItemFromCart } = useProductPageContext();

  return (
    <li className={styles.item}>
      <img className={styles.img} src={image} alt="photo" />
      <div className={styles.itemInfo}>
        <h4 className={styles.itemTitle}>{title}</h4>
        <div className={styles.price}>
          <span className={styles.priceItem}>${formatPrice(price)}</span>
          <span className={styles.quantity}>x {quantity}</span>
          <span className={styles.total}>${formatPrice(price * quantity)}</span>
        </div>
      </div>
      <div onClick={() => removeItemFromCart(id)} className={styles.iconRemove}>
        <IconRemove />
      </div>
    </li>
  );
};
