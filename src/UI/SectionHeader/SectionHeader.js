import styles from "./SectionHeader.module.css";

const SectionHeader = (props) => {
  return (
    <div className={styles.header}>
      <h4 className={styles.header__title}>{props.title}</h4>
      <a className={styles.header__anchor} href={props.href}>
        {props.options}
      </a>
    </div>
  );
};

export default SectionHeader;
