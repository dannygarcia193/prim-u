import * as styles from "./Gallery.module.css";
import React from "react";
import Header from "../header/Header";
import { useStaticQuery, graphql } from "gatsby";

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulServicesSection {
        edges {
          node {
            id
            image {
              fluid {
                srcWebp
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
      <div
        key={node.id}
        className={styles.ImageContainer + " " + styles.Regular}
        style={{
          backgroundImage: `url(${"https:" + node.image.fluid.srcWebp})`,
        }}
      >
        <div className={styles.Overlay}>
          <p className={styles.Service}>{node.image.title}</p>
        </div>
      </div>
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
