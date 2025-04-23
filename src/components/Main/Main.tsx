import { ReactElement } from "react";
import { Container } from "../Container/Container";

import styles from "./styles.module.css";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import { Lightbox } from "../Lightbox/Lightbox";
import { useGalleryContext } from "../../context/GalleryContext";

interface Props {
  children: ReactElement;
}

export const Main = ({ children }: Props) => {
  const { isModalOpen } = useGalleryContext();

  return (
    <main className={styles.main}>
      <Container>{children}</Container>
      {isModalOpen && (
        <ModalWrapper>
          <Lightbox />
        </ModalWrapper>
      )}
    </main>
  );
};
