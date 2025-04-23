import { ReactNode, useRef } from "react";
import { useDropdown } from "../../context/DropDownContext";

import styles from "./styles.module.css";
import { IconClose } from "../../icons/IconClose";
import { useClickOutside } from "../../hooks/useClickOutside";

interface MobileDrawerProps {
  children: ReactNode;
}

export const MobileDrawer = ({ children }: MobileDrawerProps) => {
  const { isOpen, close } = useDropdown();

  const ref = useRef(null);

  useClickOutside(ref, close, isOpen);

  return (
    <div>
      {isOpen && <div className={styles.backdrop} />}
      <aside
        ref={ref}
        className={`${styles.drawer} ${isOpen ? styles.open : ""}`}
      >
        <button className={styles.closeButton} onClick={close}>
          <IconClose />
        </button>
        <div className={styles.content}>{children}</div>
      </aside>
    </div>
  );
};
