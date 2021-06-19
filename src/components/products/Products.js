import React from "react"
import * as styles from "./Products.module.css"
import Scrollbar from "../scrollbar/Scrollbar"

const Products = () => {
    const products = [1,2,3,4,5,6,7,8,9].map( (count, idx) => {
        return( 
        <div key={idx} className={styles.ProductContainer}>
            <div className={styles.ImageContainer}/>
            <div className={styles.ProductInfo}>
                <div className={styles.Name}>Scrub - Self heat Manda</div>
                 <p className={styles.Text}>Scrub for your body, description of the item, something else, some selling text, unique qualities and outstanding properties.</p>
                 <div className={styles.PriceContainer}><span className={styles.Price}>₽ 277</span></div>
            </div>
        </div>
        )
         }
     )
     return <div style={{display:'inline-flex', marginBottom:"80px"}}>{products}</div>
 }

 const ProductContainer = () => {
    const currentRef = React.useRef(null);
    return (
    <>
    <div className={"ScrollbarContainer" + " "+ styles.MainReview}  ref={currentRef}> 
        <Products />
    </div>
    <Scrollbar currentRef={currentRef}/>
    <button className={styles.CTAButton + ' ' + 'CTAButton'}>
        <span className={styles.ButtonText+ ' ' + 'ButtonText'}>check out beauty products</span>
    </button>
    </>
    )
}
export default ProductContainer