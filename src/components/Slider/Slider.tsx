import { useGalleryContext } from "../../context/GalleryContext";
import { LightboxButtons } from "../LightboxButtons/LightboxButtons";
import { SelectedPhoto } from "../SelectedPhoto/SelectedPhoto";
import styles from "./styles.module.css";

export const Slider = () => {
  const { sliderImage } = useGalleryContext();

  return (
    <div className={styles.slider}>
      <SelectedPhoto imgSrc={sliderImage} />
      <LightboxButtons />
    </div>
  );
};
