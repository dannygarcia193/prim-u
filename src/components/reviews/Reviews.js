import React from "react"
import * as styles from "./Reviews.module.css"

const Reviews = () => {
    const ratings =  [1,2,3,4,5].map( (count,idx) => <div key={idx} className={styles.Rating}/>)
    const reviews = [1,2,3,4,5,6,7,8,9].map( (count, idx) => {
       return( 
       <div key={idx} className={styles.ReviewContainer}>
            <div className={styles.Info}>
                <div className={styles.Reviewer}>Kim Brandt</div>
                <div className={styles.RatingContainer}>
                    {ratings}
                </div>
            </div>
            <div className={styles.Review}>
                <p>I recently booked a pamper party for three of my friends. All primlancers arrived on time and gave us the best experience yet! They were friendly, helpful and so professional! And booking and payment was easy, streamlined and so quick.</p>
            </div>
        </div>
       )
        }
    )
    return <div style={{display:'inline-flex', marginBottom:"60px"}}>{reviews}</div>
}
const ReviewContainer = () => {
    return (
    <div className={styles.MainReview}>
        <Reviews/>
    </div>
    )
}

export default ReviewContainer