import { NavigationItem } from "../NavigationItem/NavigationItem";
import styles from "./styles.module.css";

const navigation = ["Collections", "Men", "Women", "About", "Contract"];

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navigation.map((item) => {
          return <NavigationItem key={item}>{item}</NavigationItem>;
        })}
      </ul>
    </nav>
  );
};
