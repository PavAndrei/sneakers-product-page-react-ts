import { useGalleryContext } from "../../context/GalleryContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { IImage } from "../../interfaces";
import styles from "./styles.module.css";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  imgSrc: IImage | undefined;
}

export const SelectedPhoto = ({ imgSrc }: Props) => {
  const { isModalOpen, openModal } = useGalleryContext();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <AnimatePresence mode="wait">
      {imgSrc && (
        <motion.img
          key={imgSrc.id}
          src={imgSrc.fullSize}
          alt="selected photo"
          className={`${!isModalOpen && !isMobile && styles.pointed} ${
            styles.sliderImage
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={!isModalOpen && !isMobile ? openModal : undefined}
        />
      )}
    </AnimatePresence>
  );
};
