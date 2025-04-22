import styles from "./styles.module.css";

interface Props {
  id: string;
  thumbnailSize: string;
  i: number;
  isActive: boolean;
  onClick: () => void;
}

export const PhotosItem = ({ thumbnailSize, i, isActive, onClick }: Props) => {
  return (
    <li className={styles.item}>
      <img
        onClick={onClick}
        className={isActive ? styles.thumbnailActive : styles.thumbnail}
        src={thumbnailSize}
        alt={`thumbnail-${i + 1}`}
      />
    </li>
  );
};
