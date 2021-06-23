import * as styles from "./Gallery.module.css";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Services = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBeautyServicesSection {
        edges {
          node {
            id
            callToAction
            callToActionLink
            image {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
              title
            }
            description {
              description
            }
          }
        }
      }
    }
  `).allContentfulBeautyServicesSection.edges;
  const services = data.map(({ node }) => {
    return (
      <div key={node.id} className={styles.CustomContainer}>
        <BackgroundImage
          Tag="div"
          key={node.id}
          className={styles.ImageContainer + " " + styles.Custom}
          fluid={node.image.fluid}
          role="img"
          aria-label={"Image of " + node.image.title + " service"}
          preserveStackingContext={true}
        >
          <div className={styles.Overlay}>
            <p className={styles.Service}>{node.image.title}</p>
            <a
              href={node.callToActionLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={"CTAButton " + styles.CTAButton}>
                {" "}
                <span className="ButtonText">{node.callToAction}</span>
              </button>
            </a>
          </div>
        </BackgroundImage>
        {node.description.description.split("\n\n").map((paragraph, idx) => (
          <p key={idx} className={styles.Text}>
            {paragraph}
          </p>
        ))}
      </div>
    );
  });
  return (
    <>
      <div className={styles.Gallery} id="WORK-WITH-US">
        {services}
      </div>
    </>
  );
};

export default Services;
