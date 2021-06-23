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
  `).allContentfulForMoreThanJustYouSection.edges;
  return (
    <div>
      <Header text={"for"} bold={"more"} text2={"than just u"} />
      <Card small={true} data={data} />
    </div>
  );
};

export default ForMoreThanJustU;
