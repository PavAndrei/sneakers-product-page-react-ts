import { useProductPageContext } from "../../context/ProductPageContext";

import styles from "./styles.module.css";

export const ProductGallery = () => {
  const { productData, selectedImage, selectNewImage, openModal } =
    useProductPageContext();

  return (
    <div className={styles.gallery}>
      <img
        onClick={openModal}
        className={styles.mainImage}
        src={selectedImage?.fullSize}
        alt="full-size image"
      />
      <div className={styles.group}>
        {productData?.images.map((image, i) => {
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
              alt={`thumbnail-${i}`}
            />
          );
        })}
      </div>
    </div>
  );
};
