import { useGalleryContext } from "../../context/GalleryContext";
import { IconNext } from "../../icons/IconNext";
import { IconPrev } from "../../icons/IconPrev";

import styles from "./styles.module.css";

export const LightboxButtons = () => {
  const { filpSlides } = useGalleryContext();

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
