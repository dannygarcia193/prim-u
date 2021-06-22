import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "./Accordion.module.css";
import Accordion, { Heading } from "./Accordion";
const Faq = ({ data }) => {
  return (
    <div className={styles.MainContainer} id="FAQ">
      <Heading heading={"for customers"} />
      <Accordion data={data} />
      <button className={styles.ShowMore}>
        <span className={styles.BtnText}>show more</span>
      </button>
    </div>
  );
};
const Faq2 = ({ data }) => {
  return (
    <div className={styles.MainContainer}>
      <Heading heading={"for Partners"} />
      <Accordion data={data} />
      <button className={styles.ShowMore} style={{ marginBottom: 0 }}>
        <span className={styles.BtnText}>show more</span>
      </button>
    </div>
  );
};

const FAQContainer = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulFaq {
        edges {
          node {
            id
            answer {
              answer
            }
            question
          }
        }
      }
    }
  `);
  const items = data.allContentfulFaq.edges.map(({ node }) => {
    return {
      answer: node.answer.answer,
      question: node.question,
      id: node.id,
    };
  });
  return (
    <>
      <Faq data={items} />
      <Faq2 data={items} />
    </>
  );
};

export default FAQContainer;
