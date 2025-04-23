import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
}

export const NavigationItem = ({ children }: Props) => {
  return (
    <li className={styles.item}>
      <a className={styles.link} href="#!">
        {children}
      </a>
    </li>
  );
};
