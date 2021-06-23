import * as styles from "./App.module.css";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
const AppSection = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulAppSection {
        edges {
          node {
            appStoreLink
            description {
              description
            }
            googlePlayLink
            id
            image {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `).allContentfulAppSection.edges[0].node;
  return (
    <div className={styles.AppSection}>
      <div className={styles.TextContainer}>
        <h2 className={styles.Title}>we have an app for u</h2>
        {data.description.description.split("\n\n").map((paragraph, idx) => (
          <p key={idx} className={styles.Text}>
            {paragraph}
          </p>
        ))}
        <a href={data.appStoreLink} target="_blank" rel="noopener noreferrer">
          <StaticImage
            className={styles.AppLogo}
            src="../../images/appStoreLogo.svg"
            alt="Apple store download logo"
          />
        </a>
        <a href={data.googlePlayLink} target="_blank" rel="noopener noreferrer">
          <StaticImage
            className={styles.AppLogo}
            src="../../images/googlePlayLogo.svg"
            alt="Google play download logo"
          />
        </a>
      </div>
      <BackgroundImage
        Tag="div"
        key={data.id}
        className={styles.ImageSection}
        fluid={data.image.fluid}
        role="img"
        background-size="contain"
      />
    </div>
  );
};
export default AppSection;
