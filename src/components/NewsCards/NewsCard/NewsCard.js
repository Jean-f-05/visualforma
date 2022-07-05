import React from "react";
import SectionHeader from "../../../UI/SectionHeader/SectionHeader";
import Card from "../Card/Card";
import styles from "./NewsCard.module.css";

const NewsCards = () => {
  return (
    <section className="section">
      <SectionHeader
        title="Notícias"
        href="#/"
        options="Ver todas"
      ></SectionHeader>

      <div className={styles.newsCards}>
        <Card type="tour" date="27 - 07 - 2020">
          Autarquia360 ao fresco 2020
        </Card>

        <Card type="eco" date="27 - 07 - 2020">
          Exposição de fotografia Still(h)e(a)en
        </Card>

        <Card type="eco" date="27 - 07 - 2020">
          Regularizada a situação da interrupção do fornecimento ...>
        </Card>
      </div>
    </section>
  );
};

export default NewsCards;
