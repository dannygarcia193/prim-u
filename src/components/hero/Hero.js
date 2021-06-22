import React from "react";
import * as styles from "./Hero.module.css";
import { useStaticQuery, graphql } from "gatsby";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulMainSection {
        heroText
      }
    }
  `).contentfulMainSection;
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroContainer}>
        <p className={styles.Title}>{data.heroText}</p>
      </div>
    </div>
  );
};
export default Hero;
