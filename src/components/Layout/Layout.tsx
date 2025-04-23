import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return <div className={styles.layout}>{children}</div>;
};
