import { ReactNode } from "react";
import styles from "./styles.module.css";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import { Lightbox } from "../Lightbox/Lightbox";
import { useProductPageContext } from "../../context/ProductPageContext";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const { isModalOpen } = useProductPageContext();
  return (
    <div className={styles.layout}>
      {children}
      {isModalOpen && (
        <ModalWrapper>
          <Lightbox />
        </ModalWrapper>
      )}
    </div>
  );
};
