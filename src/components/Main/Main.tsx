import { ReactElement } from "react";
import { Container } from "../Container/Container";

import styles from "./styles.module.css";

interface Props {
  children: ReactElement;
}

export const Main = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <Container>{children}</Container>
    </main>
  );
};
