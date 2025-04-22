import styles from "./styles.module.css";

interface Image {
  id: string;
  thumbnailSize: string;
}

interface PhotosListProps {
  images: Image[];
  activeImageId: string | null;
  onImageSelect: (id: string) => void;
}

export const PhotosList = ({
  images,
  activeImageId,
  onImageSelect,
}: PhotosListProps) => {
  return (
    <ul className={styles.list}>
      {images.map((img, i) => (
        <li className={styles.item} key={img.id}>
          <img
            src={img.thumbnailSize}
            alt={`thumbnail-${i + 1}`}
            onClick={() => onImageSelect(img.id)}
            className={
              img.id === activeImageId
                ? styles.thumbnailActive
                : styles.thumbnail
            }
          />
        </li>
      ))}
    </ul>
  );
};
