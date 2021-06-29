import React from "react";
import * as styles from "./Hero.module.css";
import { useStaticQuery, graphql } from "gatsby";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulMainSection {
        image {
          file {
            url
          }
        }
        heroText
      }
    }
  `).contentfulMainSection;
  const [heroImage, setHeroImage] = React.useState();
  React.useEffect(() => {
    setTimeout(() => {
      setHeroImage(true);
    }, 100);
  }, []);

  const image = heroImage
    ? { backgroundImage: `url(${data.image.file.url})` }
    : { backgroundColor: "black" };

  return (
    <div className={styles.Hero} style={image}>
      <div className={styles.HeroContainer}>
        <h1 className={styles.Title}>{data.heroText}</h1>
      </div>
    </div>
  );
};
export default Hero;
