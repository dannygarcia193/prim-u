import BackgroundImage from "gatsby-background-image";
import React from "react";
import * as styles from "./Card.module.css";

const Card = ({ small, data }) => {
  const size = small === true ? styles.Small : styles.Large;
  const cards = data.map(({ node }) => {
    return (
      <BackgroundImage
        Tag="div"
        key={node.id}
        className={styles.CardContainer + " " + size}
        fluid={node.image.fluid}
        role="img"
        aria-label={"Image of " + node.image.title + " service"}
        preserveStackingContext={true}
      >
        <div className={styles.Card}>
          <div className={styles.TextContainer}>
            <h3 className={styles.Heading}>{node.image.title}</h3>
            <div className={styles.DescriptionContainer}>
              {node.description.description
                .split("\n\n")
                .map((paragraph, idx) => (
                  <p key={idx} className={styles.Text}>
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
          <div className={styles.ButtonContainer}>
            <a
              href={node.callToActionLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={"CTAButton " + styles.btn}>
                <span className="ButtonText">{node.callToAction}</span>
              </button>
            </a>
          </div>
        </div>
      </BackgroundImage>
    );
  });
  return <div>{cards}</div>;
};

export default Card;
