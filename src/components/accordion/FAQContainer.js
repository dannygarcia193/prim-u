import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "./Accordion.module.css";
import Accordion, { Heading } from "./Accordion";
const Faq = ({ data }) => {
  const [itemsToShow, setItemsToShow] = React.useState(4);
  return (
    <div className={styles.MainContainer} id="FAQ">
      <Heading heading={"for customers"} />
      <Accordion data={data} itemsToShow={itemsToShow} />
      {itemsToShow === data.length ? undefined : (
        <button
          className={styles.ShowMore}
          onClick={() => setItemsToShow(itemsToShow + 2)}
        >
          <span className={styles.BtnText}>show more</span>
        </button>
      )}
    </div>
  );
};
const Faq2 = ({ data }) => {
  const [itemsToShow, setItemsToShow] = React.useState(4);
  return (
    <div className={styles.MainContainer}>
      <Heading heading={"for Partners"} />
      <Accordion data={data} itemsToShow={itemsToShow} />
      {itemsToShow === data.length ? undefined : (
        <button
          className={styles.ShowMore}
          style={{ marginBottom: 0 }}
          onClick={() => setItemsToShow(itemsToShow + 2)}
        >
          <span className={styles.BtnText}>show more</span>
        </button>
      )}
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
