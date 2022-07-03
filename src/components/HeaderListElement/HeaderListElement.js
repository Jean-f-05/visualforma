import styles from "./HeaderListElement.module.css";

const HeaderListElement = (props) => {
  return (
    <li className={styles.list}>
      {props.src && (
        <img src={props.src} alt={props.alt} href={props.href}></img>
      )}

      <a className={styles["header__main-li"]} href={props.href}>
        {props.children}
      </a>
    </li>
  );
};

export default HeaderListElement;
