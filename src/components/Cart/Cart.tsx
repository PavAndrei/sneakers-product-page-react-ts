import { useProductPageContext } from "../../context/ProductPageContext";

import { IconRemove } from "../../icons/IconRemove";

import styles from "./styles.module.css";

export const Cart = () => {
  const { isCartVisible } = useProductPageContext();

  if (isCartVisible) {
    return (
      <div className={styles.cart}>
        <h3 className={styles.title}>Cart</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img src="" alt="photo" />
            <div className={styles.itemInfo}>
              <h4 className={styles.itemTitle}>
                Fall Limited Edition Sneakers
              </h4>
              <div className={styles.price}>
                <span className={styles.priceItem}>$125.00</span>
                <span className={styles.quantity}>x 3</span>
                <span className={styles.total}>$375.00</span>
              </div>
            </div>
            <div className={styles.removeIcon}>
              <IconRemove />
            </div>
          </li>
        </ul>
        <div></div>
      </div>
    );
  }

  return <div className={styles.cart}>Cart is invisible</div>;
};
