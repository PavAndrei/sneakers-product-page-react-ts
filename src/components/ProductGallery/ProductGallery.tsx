import { useGalleryContext } from "../../context/GalleryContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { PhotosList } from "../PhotosList/PhotosList";
import { SelectedPhoto } from "../SelectedPhoto/SelectedPhoto";
import { Slider } from "../Slider/Slider";

import styles from "./styles.module.css";

export const ProductGallery = () => {
  const { selectedImage, productData, selectNewImage } = useGalleryContext();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={styles.gallery}>
      {isMobile ? (
        <Slider />
      ) : (
        <>
          <SelectedPhoto imgSrc={selectedImage} />
          <div className={styles.group}>
            <PhotosList
              images={productData?.images || []}
              activeImageId={selectedImage?.id || null}
              onImageSelect={(id) => selectNewImage(id, "page")}
            />
          </div>
        </>
      )}
    </div>
  );
};
