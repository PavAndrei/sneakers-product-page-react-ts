import { useProductPageContext } from "../../context/ProductPageContext";
import { PhotosList } from "../PhotosList/PhotosList";
import { SelectedPhoto } from "../SelectedPhoto/SelectedPhoto";

import styles from "./styles.module.css";

export const ProductGallery = () => {
  const { selectedImage, productData, selectNewImage } =
    useProductPageContext();

  return (
    <div className={styles.gallery}>
      <SelectedPhoto imgSrc={selectedImage} />
      <div className={styles.group}>
        <PhotosList
          images={productData?.images || []}
          activeImageId={selectedImage?.id || null}
          onImageSelect={(id) => selectNewImage(id, "page")}
        />
      </div>
    </div>
  );
};
