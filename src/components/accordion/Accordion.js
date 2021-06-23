import React from "react";
import * as styles from "./Accordion.module.css";

const Accordion = ({ data, itemsToShow }) => {
  const faq = data.slice(0, itemsToShow).map((data) => {
    return (
      <details key={data.id} className={styles.QAContainer}>
        <summary className={styles.Question}>{data.question}</summary>
        <p className={styles.Answer}>{data.answer}</p>
      </details>
    );
  });
  return <div>{faq}</div>;
};
export const Heading = ({ heading }) => {
  return (
    <div className={styles.Heading}>
      <h3 className={styles.SectionName}>{heading}</h3>
      <div className={styles.Underline} />
    </div>
  );
};

export default Accordion;
