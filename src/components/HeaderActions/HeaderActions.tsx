import { Avatars } from "../../assets";
import { useProductPageContext } from "../../context/ProductPageContext";

import { IconCart } from "../../icons/IconCart";

import styles from "./styles.module.css";

export const HeaderActions = () => {
  const { toggleCartVisibility, calculateOrderQuantity } =
    useProductPageContext();

  const quantity = calculateOrderQuantity();

  return (
    <div className={styles.group}>
      <button onClick={toggleCartVisibility} className={styles.btn}>
        <IconCart color="" />
        {quantity != undefined && quantity > 0 && (
          <span className={styles.quantity}>{quantity}</span>
        )}
      </button>
      <button className={styles.btn}>
        <img className={styles.img} src={Avatars.avatar} alt="avatar" />
      </button>
    </div>
  );
};
