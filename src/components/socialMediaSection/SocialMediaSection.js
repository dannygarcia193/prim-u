import React from "react";
import * as styles from "./SocialMediaSection.module.css";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
const SocialMediaSection = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSocialMediaSubscriptionSection(callToAction: {}) {
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
  `).contentfulSocialMediaSubscriptionSection;

  return (
    <div className={styles.Container}>
      <BackgroundImage
        Tag="div"
        key={data.id}
        className={styles.Image}
        fluid={data.image.fluid}
        role="img"
        aria-label={"Image of " + data.image.title + " service"}
      />
      <div className={styles.Info}>
        <h3 className={styles.Heading}>
          We post interesting stuff on our{" "}
          <span className={styles.PrimaryText}>instagram</span>
        </h3>
        {data.description.description.split("\n").map((paragraph, idx) =>
          paragraph !== "" ? (
            <p key={idx} className={styles.Text}>
              {paragraph}
            </p>
          ) : (
            " "
          )
        )}
        <a
          href={data.callToActionLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.Btn}>
            <span className={styles.BtnText}>{data.callToAction}</span>
          </button>
        </a>
      </div>
    </div>
  );
};
export default SocialMediaSection;
