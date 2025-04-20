import styles from "./styles.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <li className={styles.item}>
        <a className={styles.link} href="#!">
          Collections
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="#!">
          Men
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="#!">
          Women
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="#!">
          About
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="#!">
          Contract
        </a>
      </li>
    </nav>
  );
};
