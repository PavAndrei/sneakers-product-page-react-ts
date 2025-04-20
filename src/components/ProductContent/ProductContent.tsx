import { IconCart } from "../../icons/IconCart";
import { IconMinus } from "../../icons/IconMinus";
import { IconPlus } from "../../icons/IconPlus";

import styles from "./styles.module.css";

export const ProductContent = () => {
  return (
    <div className={styles.content}>
      <h3 className={styles.subtitle}>SNEAKER COMPANY</h3>
      <h1 className={styles.title}>Fall Limited Edition Sneakers</h1>
      <p className={styles.text}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className={styles.price}>
        <div className={styles.currentPrice}>
          <span className={styles.fullPrice}>$125.00</span>
          <span className={styles.discount}>-50%</span>
        </div>
        <div className={styles.prevPrice}>$250.00</div>
      </div>
      <div className={styles.purchase}>
        <div className={styles.order}>
          <span className={styles.orderControl}>
            <IconMinus />
          </span>
          <span className={styles.number}>0</span>
          <span className={styles.orderControl}>
            <IconPlus />
          </span>
        </div>
        <button className={styles.btn}>
          <IconCart color="black" /> <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};
