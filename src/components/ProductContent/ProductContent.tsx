import { useCartContext } from "../../context/CartContext";
import { useGalleryContext } from "../../context/GalleryContext";
import { IconCart } from "../../icons/IconCart";
import { IconMinus } from "../../icons/IconMinus";
import { IconPlus } from "../../icons/IconPlus";

import { calculateWithDiscount } from "../../utils/calculateWithDiscount";
import { formatPrice } from "../../utils/formatPrice";

import styles from "./styles.module.css";

export const ProductContent = () => {
  const { productData } = useGalleryContext();
  const { counter, changeCounter, addItemToCart } = useCartContext();

  return (
    <div className={styles.content}>
      <h3 className={styles.subtitle}>{productData?.subtitle}</h3>
      <h1 className={styles.title}>{productData?.title}</h1>
      <p className={styles.text}>{productData?.text}</p>
      <div className={styles.price}>
        <div className={styles.currentPrice}>
          <span className={styles.fullPrice}>
            $
            {calculateWithDiscount(
              productData?.price,
              productData?.discount,
              counter
            )}
          </span>
          <span className={styles.discount}>-{productData?.discount}%</span>
        </div>
        <div className={styles.prevPrice}>
          ${formatPrice(productData && productData.price * counter)}
        </div>
      </div>
      <div className={styles.purchase}>
        <div className={styles.order}>
          <button
            onClick={() => changeCounter("dec")}
            className={styles.orderControl}
          >
            <IconMinus />
          </button>
          <span className={styles.number}>{counter}</span>
          <button
            onClick={() => changeCounter("inc")}
            className={styles.orderControl}
          >
            <IconPlus />
          </button>
        </div>
        <button
          onClick={() => addItemToCart(productData, counter)}
          className={styles.btn}
        >
          <IconCart color="black" /> <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};
