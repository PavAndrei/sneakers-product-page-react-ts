import { useRef } from "react";
import { useProductPageContext } from "../../context/ProductPageContext";
import { IconClose } from "../../icons/IconClose";
import styles from "./styles.module.css";
import { useClickOutside } from "../../hooks/useClickOutside";

export const Lightbox = () => {
  const {
    productData,
    selectNewImage,
    selectedImage,
    closeModal,
    isModalOpen,
  } = useProductPageContext();

  const ref = useRef(null);

  useClickOutside(ref, closeModal, isModalOpen);

  return (
    <div ref={ref} className={styles.lightboxWrapper}>
      <div className={styles.lightbox}>
        <button onClick={closeModal} className={styles.buttonClose}>
          <IconClose />
        </button>
        <div className={styles.slider}>
          <img
            className={styles.sliderImage}
            src={selectedImage?.fullSize}
            alt="photo"
          />
          <button className={styles.sliderBtn}>{"<"}</button>
          <button className={styles.sliderBtn}>{">"}</button>
        </div>
        <ul className={styles.navigationList}>
          {productData?.images.map((image) => {
            return (
              <img
                onClick={() => selectNewImage(image.id)}
                key={image.thumbnailSize}
                className={
                  image.thumbnailSize === selectedImage?.thumbnailSize
                    ? styles.thumbnailActive
                    : styles.thumbnail
                }
                src={image.thumbnailSize}
                alt="thumbnail-1"
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
