import { Container } from "../Container/Container";
import { HeaderActions } from "../HeaderActions/HeaderActions";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Logo />
          <Navigation />
          <HeaderActions />
        </div>
      </Container>
    </header>
  );
};
