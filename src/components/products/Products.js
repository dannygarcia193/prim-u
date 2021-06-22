import React from "react"
import * as styles from "./Products.module.css"
import Carousel from "../carousel/Carousel"
import { useStaticQuery, graphql } from "gatsby"

const Products = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulProducts {
        edges {
          node {
            image {
              fluid {
                srcWebp
              }
              title
            }
            description {
              description
            }
            price
            priceLink
          }
        }
      }
    }
  `).allContentfulProducts.edges
    const products = data.map( ({node}) => {
        return( 
        <div key={node.id} className={styles.ProductContainer}>
            <div className={styles.ImageContainer} style ={{backgroundImage: `url(${"https:" + node.image.fluid.srcWebp})`}}/>
            <div className={styles.ProductInfo}>
                <div className={styles.Name}>{node.image.title}</div>
                {node.description.description.split('\n\n').map(paragraph => <p className={styles.Text}>{paragraph}</p> )}
                <a href={node.priceLink} target="_blank" rel="noopener noreferrer">
                    <div className={styles.PriceContainer}><span className={styles.Price}>{node.price}</span></div>
                </a>
            </div>
        </div>
        )
         }
     )
     return <div className={styles.MainContainer}>{products}</div>
 }

 const ProductContainer = () => {
    const currentRef = React.useRef(null);
    return (
    <>
    <Carousel currentRef={currentRef} idx={"Products"}><Products/></Carousel>
    <button className={styles.CTAButton + ' CTAButton'}>
        <span className={styles.ButtonText+ ' ButtonText'}>check out beauty products</span>
    </button>
    </>
    )
}
export default ProductContainer