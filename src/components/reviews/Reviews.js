import React from "react";
import * as styles from "./Reviews.module.css";
import Carousel from "../carousel/Carousel";
import { useStaticQuery, graphql } from "gatsby";
import Star from "./Star";
import Header from "../header/Header";
const Reviews = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulReviews {
        edges {
          node {
            author
            id
            review {
              review
            }
            rating
          }
        }
      }
    }
  `).allContentfulReviews.edges;
  const reviews = data.map(({ node }) => {
    const items = [];
    for (let i = 0; i < node.rating; i++) {
      items.push(<Star customClass={styles.Star} key={i} />);
    }
    return (
      <div key={node.id} className={styles.ReviewContainer}>
        <div className={styles.Info}>
          <div className={styles.Reviewer}>{node.author}</div>
          <div className={styles.RatingContainer}>{items}</div>
        </div>
        {node.review.review.split("\n\n").map((paragraph, idx) => (
          <p key={idx} className={styles.Review}>
            {paragraph}
          </p>
        ))}
      </div>
    );
  });
  return <div className={styles.MainContainer}>{reviews}</div>;
};
const ReviewContainer = () => {
  const currentRef = React.useRef(null);
  return (
    <>
      <Header
        text={"What our"}
        bold={"customers"}
        text2={"say"}
        customClass={" " + styles.Header}
      />
      <Carousel idx={"Reviews"} currentRef={currentRef}>
        <Reviews />
      </Carousel>
      <hr className={styles.HR} />
    </>
  );
};

export default ReviewContainer;
