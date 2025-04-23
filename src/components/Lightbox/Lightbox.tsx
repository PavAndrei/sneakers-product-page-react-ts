import { useRef } from "react";
import { IconClose } from "../../icons/IconClose";
import styles from "./styles.module.css";
import { useClickOutside } from "../../hooks/useClickOutside";
import { PhotosList } from "../PhotosList/PhotosList";
import { useGalleryContext } from "../../context/GalleryContext";
import { Slider } from "../Slider/Slider";

export const Lightbox = () => {
  const { closeModal, isModalOpen, sliderImage, selectNewImage, productData } =
    useGalleryContext();

  const ref = useRef(null);

  useClickOutside(ref, closeModal, isModalOpen);

  return (
    <div ref={ref} className={styles.lightboxWrapper}>
      <div className={styles.lightbox}>
        <button onClick={closeModal} className={styles.buttonClose}>
          <IconClose />
        </button>
        <Slider />
        <div className={styles.listWrapper}>
          <PhotosList
            images={productData?.images || []}
            activeImageId={sliderImage?.id || null}
            onImageSelect={(id) => selectNewImage(id, "modal")}
          />
        </div>
      </div>
    </div>
  );
};
