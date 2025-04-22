import { useRef } from "react";
import { useProductPageContext } from "../../context/ProductPageContext";
import { IconClose } from "../../icons/IconClose";
import styles from "./styles.module.css";
import { useClickOutside } from "../../hooks/useClickOutside";
import { PhotosList } from "../PhotosList/PhotosList";
import { SelectedPhoto } from "../SelectedPhoto/SelectedPhoto";
import { LightboxButtons } from "../LightboxButtons/LightboxButtons";

export const Lightbox = () => {
  const { closeModal, isModalOpen, sliderImage, productData, selectNewImage } =
    useProductPageContext();

  const ref = useRef(null);

  useClickOutside(ref, closeModal, isModalOpen);

  return (
    <div ref={ref} className={styles.lightboxWrapper}>
      <div className={styles.lightbox}>
        <button onClick={closeModal} className={styles.buttonClose}>
          <IconClose />
        </button>
        <div className={styles.slider}>
          <SelectedPhoto imgSrc={sliderImage} />
          <LightboxButtons />
        </div>
        <PhotosList
          images={productData?.images || []}
          activeImageId={sliderImage?.id || null}
          onImageSelect={(id) => selectNewImage(id, "modal")}
        />
      </div>
    </div>
  );
};
