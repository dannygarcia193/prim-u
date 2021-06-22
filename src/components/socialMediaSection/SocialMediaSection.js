import React from "react"
import * as styles from "./SocialMediaSection.module.css"
import { useStaticQuery, graphql } from "gatsby"

const SocialMediaSection = () =>{
    const data = useStaticQuery(graphql`
    {
      contentfulSocialMediaSubscriptionSection(callToAction: {}) {
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
  `).contentfulSocialMediaSubscriptionSection
  console.log(data)
    return(
        <div className={styles.Container}>
            <div className={styles.Image} style ={{backgroundImage: `url(${"https:" + data.image.fluid.srcWebp})`}} />
            <div className={styles.Info}>
                <h3 className={styles.Heading}>We post interesting stuff on our <span className={styles.PrimaryText}>instagram</span></h3>
                {data.description.description.split('\n').map(paragraph => paragraph !== '' ? <p className={styles.Text}>{paragraph}</p> : ' ')}
                <a href={data.callToActionLink} target="_blank" rel="noopener noreferrer">
                    <button className={styles.Btn}><span className={styles.BtnText}>{data.callToAction}</span></button>
                </a>
            </div>
        
        </div>
    )
}
export default SocialMediaSection