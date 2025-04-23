import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./styles.module.css";
import { useGalleryContext } from "../../context/GalleryContext";

interface Props {
  children: ReactNode;
  isOpen: boolean;
}

export const ModalWrapper = ({ children }: Props) => {
  const { isModalOpen } = useGalleryContext();

  return (
    <AnimatePresence mode="wait">
      {isModalOpen && (
        <motion.div
          key="modalWrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={styles.modalWrapper}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
