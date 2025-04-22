import { useProductPageContext } from "../../context/ProductPageContext";
import { IconNext } from "../../icons/IconNext";
import { IconPrev } from "../../icons/IconPrev";

import styles from "./styles.module.css";

export const LightboxButtons = () => {
  const { filpSlides } = useProductPageContext();

  return (
    <>
      <button
        onClick={() => filpSlides("dec")}
        className={styles.sliderBtnLeft}
      >
        <IconPrev />
      </button>
      <button
        onClick={() => filpSlides("inc")}
        className={styles.sliderBtnRight}
      >
        <IconNext />
      </button>
    </>
  );
};
