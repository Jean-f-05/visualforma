import { ReactComponent as IconFace } from "../../../assets/icons/logo-facebook.svg";
import { ReactComponent as IconInsta } from "../../../assets/icons/logo-instagram.svg";
import { ReactComponent as IconSearch } from "../../../assets/icons/search-outline.svg";
import styles from "./HeaderTop.module.css";

const HeaderTop = () => {
  return (
    <div className={styles.header__top}>
      <div>
        <IconInsta className={styles.navIcon} />
        <IconFace className={styles.navIcon} />
      </div>
      <div>
        <IconSearch className={styles.navIcon} />
      </div>
    </div>
  );
};

export default HeaderTop;
