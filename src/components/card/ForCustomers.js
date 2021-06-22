import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./Card"

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
  `)
  const items = data.allContentfulForCustomersSection.edges
    return <Card small={false} data={items}/>
}

export default ForCustomers