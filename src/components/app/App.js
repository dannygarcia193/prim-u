import * as styles from "./App.module.css"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const AppSection = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulAppSection {
        edges {
          node {
            appStoreLink
            description {
              description
            }
            googlePlayLink
            id
            image {
              fluid {
                srcWebp
              }
            }
          }
        }
      }
    }
  `).allContentfulAppSection.edges[0].node
    return (
        <div className={styles.AppSection}>
            <div className={styles.TextContainer}>
                <h2 className={styles.Title}>we have an app for u</h2>
                {data.description.description.split('\n\n').map(paragraph => <p className={styles.Text}>{paragraph}</p> )}
                <a href={data.appStoreLink} target="_blank" rel="noopener noreferrer" >
                    <StaticImage className={styles.AppLogo} src="../../images/appStore.svg" />
                </a>
                <a href={data.googlePlayLink} target="_blank" rel="noopener noreferrer" >
                    <StaticImage className={styles.AppLogo} src="../../images/googleApp.svg" />
                </a>
            </div>
        <div className={styles.ImageSection} style ={{backgroundImage: `url(${"https:" + data.image.fluid.srcWebp})`}} />
        </div>
      
    )
}
export default AppSection