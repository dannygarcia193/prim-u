import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Card from "./Card";
import { HR } from "./Card.module.css";
const ForCustomers = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulForCustomersSection {
        edges {
          node {
            callToAction
            callToActionLink
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
            description {
              description
            }
          }
        }
      }
    }
  `).allContentfulForCustomersSection.edges;
  return <Card small={false} data={data} />;
};

export default ForCustomers;
