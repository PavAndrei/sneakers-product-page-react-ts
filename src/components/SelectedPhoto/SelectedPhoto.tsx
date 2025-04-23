import { useGalleryContext } from "../../context/GalleryContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { IImage } from "../../interfaces";
import styles from "./styles.module.css";

interface Props {
  imgSrc: IImage | undefined;
}

export const SelectedPhoto = ({ imgSrc }: Props) => {
  const { isModalOpen, openModal } = useGalleryContext();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <img
      className={`${!isModalOpen && !isMobile && styles.pointed} ${
        styles.sliderImage
      }`}
      src={imgSrc?.fullSize}
      alt="selected photo"
      onClick={!isModalOpen && !isMobile ? openModal : undefined}
    />
  );
};
