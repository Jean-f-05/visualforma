import SpanImage from "../SpanImage/SpanImage";
import ArrowLeftBg from "../../Arrows/ArrowLeftBg/ArrowLeftBg";
import ArrowRightBg from "../../Arrows/ArrowRightBg/ArrowRightBg";

import styles from "./HeroSpan.module.css";

import imgDouro1 from "../../../assets/imgs/vinhas1.png";
import imgDouro2 from "../../../assets/imgs/vinhas2.png";
import imgDouro3 from "../../../assets/imgs/vinhas3.png";
import imgVidigueira from "../../../assets/imgs/Vidigueira.png";

const HeroSpan = () => {
  return (
    <div className={styles.hero__span}>
      <div className={styles["hero__span-header"]}>
        <h2 className={styles["hero__span-header-text"]}>
          Apoio extraordinário à Associação Humanitária dos Bombeiros
        </h2>
        <a className={styles["hero__span-header-link"]} href="#/">
          SABER MAIS
        </a>
      </div>

      <div className={styles["hero__span-span"]}>
        <SpanImage src={imgDouro1} alt="Imagem vinhas do Douro" />
        <SpanImage src={imgDouro2} alt="Imagem uvas do Douro" />
        <SpanImage src={imgDouro3} alt="Imagem paisagem do Douro" />
        <SpanImage src={imgVidigueira} alt="Imagem castelo da vidigueira" />

        <div className={styles.buttons}>
          <ArrowLeftBg />
          <ArrowRightBg />
        </div>
      </div>
    </div>
  );
};

export default HeroSpan;
