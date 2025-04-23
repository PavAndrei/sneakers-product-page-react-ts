import { useGalleryContext } from "../../context/GalleryContext";
import { IconNext } from "../../icons/IconNext";
import { IconPrev } from "../../icons/IconPrev";

import styles from "./styles.module.css";

export const LightboxButtons = () => {
  const { filpSlides } = useGalleryContext();

  return (
    <>
      <button
        aria-label="flip-to-the-left"
        onClick={() => filpSlides("dec")}
        className={styles.sliderBtnLeft}
      >
        <IconPrev />
      </button>
      <button
        aria-label="flip-to-the-right"
        onClick={() => filpSlides("inc")}
        className={styles.sliderBtnRight}
      >
        <IconNext />
      </button>
    </>
  );
};
