import * as styles from "./Gallery.module.css"
import React from "react"
import Header from "../header/Header"
const ServicesText = ["massage", "WAXING", "make up", "manicure", "hair", "male grooming"]
const ServicesImage = ["image2.svg","image3.svg", "Rectangle8.svg", "image4.svg","image5.svg","image6.svg"]
const Gallery = () =>{
    const image = ServicesImage.map( (imageURL, idx)=> {
        return (
            <div key={idx} className={styles.ImageContainer + ' '+ styles.Regular}>
                <div className={styles.Overlay}>
                    <p className={styles.Service}>{ServicesText[idx]}</p>
                </div>
            </div>
        )
    })
    return(
        <>
            <div className={styles.ExtraSpace} id="MAKE-A-BOOKING" />
            <Header text={"treat yourself with"} bold={"our services"} text2={''}/>
            <div className={styles.Gallery}>
                {image}
            </div>
        </>
    )
}
export default Gallery