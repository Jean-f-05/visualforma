import React from "react";
import HeroSpan from "../HeroSpan/HeroSpan";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero__section}>
      <div className={styles.hero__bg}></div>
      <HeroSpan></HeroSpan>
    </section>
  );
};

export default Hero;
