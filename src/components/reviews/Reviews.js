import React from "react"
import * as styles from "./Reviews.module.css"
import Carousel from "../carousel/Carousel"
import { useStaticQuery, graphql } from "gatsby"

const Reviews = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulReviews {
        edges {
          node {
            author
            id
            review {
              review
            }
            rating
          }
        }
      }
    }
  `).allContentfulReviews.edges
    console.log(data)
    const reviews = data.map( ({node}) => {
        const items = []
        for (let i = 0; i < node.rating; i++){
            items.push(<div className={styles.Rating} />)
        }
       return( 
       <div key={node.id} className={styles.ReviewContainer}>
            <div className={styles.Info}>
                <div className={styles.Reviewer}>{node.author}</div>
                <div className={styles.RatingContainer}>
                   {items}
                </div>
            </div>
            <div className={styles.Review}>
                {node.review.review.split('\n\n').map(paragraph => <p className={styles.Text}>{paragraph}</p> )}
            </div>
        </div>
       )})
    return <div className={styles.MainContainer}>{reviews}</div>
}
const ReviewContainer = () => {
    const currentRef = React.useRef(null);
    return <Carousel idx={"Reviews"} currentRef={currentRef}><Reviews /></Carousel>
}

export default ReviewContainer