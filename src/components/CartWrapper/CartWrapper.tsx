import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
}

export const CartWrapper = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};
