import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "./Accordion.module.css";
import Accordion, { Heading } from "./Accordion";
import Header from "../header/Header";

const CustomerFaq = ({ data }) => {
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
const PartnerFaq = ({ data }) => {
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
      <Header text={"Frequently asked"} bold={"questions"} text2={""} />
      <CustomerFaq data={items} />
      <PartnerFaq data={items} />
      <hr className={styles.HR} />
    </>
  );
};

export default FAQContainer;
