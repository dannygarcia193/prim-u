import * as styles from "./Gallery.module.css"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Services  = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBeautyServicesSection {
        edges {
          node {
            id
            callToAction
            callToActionLink
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
  `).allContentfulBeautyServicesSection.edges
  const services = data.map( ({node}) => {
    return (
      <div key={node.id} className={styles.CustomContainer}>
        <div className={styles.ImageContainer + " "+ styles.Custom} style ={{backgroundImage: `url(${"https:" + node.image.fluid.srcWebp})`}}>
            <div className={styles.Overlay}>
            <p className={styles.Service}>{node.image.title}</p>
            <a href={node.callToActionLink} target="_blank" rel="noopener noreferrer">
              <button className={"CTAButton " + styles.CTAButton}><span className="ButtonText">{node.callToAction}</span></button>
            </a>
            </div>
        </div>
        {node.description.description.split('\n\n').map((paragraph,idx) => <p key={idx} className={styles.Text}>{paragraph}</p> )}
    </div>
    )
  })
    return (
    <>
    <div className={styles.Gallery} id="WORK-WITH-US">
        {services}
      </div>
    </>
    ) 
}

export default Services