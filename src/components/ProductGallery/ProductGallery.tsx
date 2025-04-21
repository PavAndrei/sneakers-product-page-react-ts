import { useProductPageContext } from "../../context/ProductPageContext";

import styles from "./styles.module.css";

export const ProductGallery = () => {
  const { productData, selectedImage, selectNewImage } =
    useProductPageContext();

  return (
    <div className={styles.gallery}>
      <img
        className={styles.mainImage}
        src={selectedImage?.fullSize}
        alt="full-size image"
      />
      <div className={styles.group}>
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
      </div>
    </div>
  );
};
