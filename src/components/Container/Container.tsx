import { ReactElement } from "react";
import styles from "./styles.module.css";

interface Props {
  children: ReactElement;
}

export const Container = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};
