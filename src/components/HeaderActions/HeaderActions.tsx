import { Avatars } from "../../assets";

import { IconCart } from "../../icons/IconCart";

import styles from "./styles.module.css";

export const HeaderActions = () => {
  return (
    <div className={styles.group}>
      <button className={styles.btn}>
        <IconCart color="" />
      </button>
      <button className={styles.btn}>
        <img className={styles.img} src={Avatars.avatar} alt="avatar" />
      </button>
    </div>
  );
};
