import React from "react"
import * as styles from "./Customer.module.css"
const Customer = () => {
    return(
    <div className={styles.CardContainer}>
        <div className={styles.Card}>
            <div className={styles.TextContainer}>
                <p className={styles.Heading}>FOR CUSTOMERS</p>
                <p className={styles.Text}>Enjoy beauty treatments wherever U are</p>
                <p className={styles.Text}>Struggling to find the time to pamper yourself? 
                With just one click, Prim-U will connect U to the right primlancer, at the right time, right in the comfort of your home. 
                On holiday? Book an expert primlancer closest to U. 
                Simply click, pick a treatment and we’ll come to U.</p>
            </div>
            <div className={styles.ButtonContainer}>
                <button className={styles.CTAButton}><span className={styles.ButtonText}>Make a Booking</span></button>
            </div>
        </div>
    </div>
    )
}

export default Customer