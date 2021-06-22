import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../header/Header";
import Card from "./Card";
const ForMoreThanJustU = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulForMoreThanJustYouSection {
        edges {
          node {
            callToAction
            callToActionLink
            id
            image {
              fluid {
                srcWebp
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
  `);
  const items = data.allContentfulForMoreThanJustYouSection.edges;
  return (
    <div>
      <Header text={"for"} bold={"more"} text2={"than just u"} />
      <Card small={true} data={items} />
    </div>
  );
};

export default ForMoreThanJustU;
