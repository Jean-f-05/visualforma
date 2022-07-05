import React from "react";
import Component from "../Component/Component";
import CardWrapper from "../../../UI/CardWrapper/CardWrapper";
import styles from "./Card.module.css";
import { ReactComponent as ArrowRight } from "../../../assets/icons/arrow-right.svg";

const Card = (props) => {
  return (
    <CardWrapper>
      <div className={`${styles.card} ${styles[props.type]}`}>
        <div className={styles.img}>
          <Component title="Categoria" type={props.type} />
        </div>
        <div className={styles.info}>
          <p className={styles.date}>{props.date}</p>
          <h4 className={styles.text}>{props.children}</h4>
          <div className={styles.test}>
            <a className={styles.details} href="#/">
              Ver mais
            </a>
            <ArrowRight className={styles.arrow} />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
