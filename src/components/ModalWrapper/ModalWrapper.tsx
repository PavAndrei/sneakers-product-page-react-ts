import { ReactNode } from "react";

import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
}

export const ModalWrapper = ({ children }: Props) => {
  return <div className={styles.modalWrapper}>{children}</div>;
};
