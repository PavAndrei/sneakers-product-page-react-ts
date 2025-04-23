import { useDropdown } from "../../context/DropDownContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { IconMenu } from "../../icons/IconMenu";
import { Container } from "../Container/Container";
import { HeaderActions } from "../HeaderActions/HeaderActions";
import { Logo } from "../Logo/Logo";
import { MobileDrawer } from "../MobileDrawer/MobileDrawer";
import { Navigation } from "../Navigation/Navigation";

import styles from "./styles.module.css";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { open } = useDropdown();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Logo />
          {isMobile ? (
            <>
              <span onClick={open} className={styles.icon}>
                <IconMenu />
              </span>
              <MobileDrawer>
                <Navigation />
              </MobileDrawer>
            </>
          ) : (
            <Navigation />
          )}
          <HeaderActions />
        </div>
      </Container>
    </header>
  );
};
