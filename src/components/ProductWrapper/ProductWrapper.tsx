import { ReactNode } from "react";

import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
}

export const ProductWrapper = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};
