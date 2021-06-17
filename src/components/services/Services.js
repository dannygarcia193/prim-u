import * as styles from "./Services.module.css"
import React from "react"

const ServicesText = ["massage", "WAXING", "make up", "manicure", "hair", "male grooming"]
const ServicesImage = ["image2.svg","image3.svg", "Rectangle8.svg", "image4.svg","image5.svg","image6.svg"]
const Gallery = () =>{
    const image = ServicesImage.map( (imageURL, idx)=> {
        return (
            <div className={styles.ImageContainer}>
                <div className={styles.Overlay}>
                <p className={styles.Service}>{ServicesText[idx]}</p>
                </div>
            </div>
        )
    })
    return(
        <div className={styles.Gallery}>
            {image}
        </div>
    )
}
export default Gallery