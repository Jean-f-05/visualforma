import styles from "./Component.module.css";

const Component = (props) => {
  return (
    <h6 className={`${styles.categorie} ${styles[props.type]}`}>
      {props.title}
    </h6>
  );
};

export default Component;
