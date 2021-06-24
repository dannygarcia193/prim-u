import * as styles from "./Gallery.module.css";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Header from "../header/Header";

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulServicesSection {
        edges {
          node {
            id
            image {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
              title
            }
          }
        }
      }
    }
  `).allContentfulServicesSection.edges;

  const image = data.map(({ node }) => {
    return (
      <BackgroundImage
        Tag="div"
        key={node.id}
        className={styles.ImageContainer + " " + styles.Regular}
        fluid={node.image.fluid}
        role="img"
        aria-label={"Image of " + node.image.title + " service"}
        preserveStackingContext={true}
      >
        <div className={styles.Overlay}>
          <p className={styles.Service}>{node.image.title}</p>
        </div>
      </BackgroundImage>
    );
  });
  return (
    <>
      <div className={styles.ExtraSpace} id="MAKE-A-BOOKING" />
      <Header text={"treat yourself with"} bold={"our services"} text2={""} />
      <div className={styles.Gallery}>{image}</div>
    </>
  );
};
export default Gallery;
