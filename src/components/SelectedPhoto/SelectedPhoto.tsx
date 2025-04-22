import { useProductPageContext } from "../../context/ProductPageContext";
import { IImage } from "../../interfaces";
import styles from "./styles.module.css";

interface Props {
  imgSrc: IImage | undefined;
}

export const SelectedPhoto = ({ imgSrc }: Props) => {
  const { isModalOpen, openModal } = useProductPageContext();

  return (
    <img
      className={`${!isModalOpen && styles.pointed} ${styles.sliderImage}`}
      src={imgSrc?.fullSize}
      alt="selected photo"
      onClick={!isModalOpen ? openModal : undefined}
    />
  );
};
