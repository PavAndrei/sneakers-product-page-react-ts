import { useProductPageContext } from "../../context/ProductPageContext";
import { CartItem } from "../CartItem/CartItem";
import styles from "./styles.module.css";

export const CartList = () => {
  const { cartData } = useProductPageContext();

  return (
    <ul className={styles.list}>
      {cartData?.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            discount={item.discount}
            quantity={item.quantity}
          />
        );
      })}
    </ul>
  );
};
