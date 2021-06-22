import React from "react"
import * as styles from "./Card.module.css"

const Card = ({small, data}) => {
    const size = small===true ? styles.Small : styles.Large
    const cards =  data.map( ({node}) => {
      return(
        <div key={node.id} className={styles.CardContainer + ' ' +size} style ={{backgroundImage: `url(${"https:" + node.image.fluid.srcWebp})`}}>
            <div className={styles.Card}>
                <div className={styles.TextContainer}>
                    <p className={styles.Heading}>{node.image.title}</p>
                    <div className={styles.DescriptionContainer}>
                        {node.description.description.split('\n\n').map(paragraph => <p className={styles.Text}>{paragraph}</p> )}
                    </div>
                </div>
                <div className={styles.ButtonContainer}>
                    <a href={node.callToActionLink} target="_blank" rel="noopener noreferrer"><button className={"CTAButton " +styles.btn}><span className="ButtonText">{node.callToAction}</span></button></a>
                </div>
            </div>
        </div>
        )
      })
    return <div>{cards}</div>
} 

export default Card