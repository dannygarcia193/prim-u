import * as styles from "./Gallery.module.css"
import React from "react"
const Services  = () => {
    return (
    <>
    <div className={styles.Gallery}>
        <div className={styles.CustomContainer}>
            <div className={styles.ImageContainer + " "+ styles.Custom}>
                <div className={styles.Overlay}>
                <p className={styles.Service}>For Freelancers</p>
                <button className={styles.CTAButton}><span className={styles.ButtonText}>Sign Up</span></button>
                </div>
            </div>
            <p className={styles.Text}>Connecting U to our network of customers
    Small business? We want to offer U a big opportunity. Download the Prim-U app and we’ll instantly give U access to thousands of customers, salons, spas and guesthouses closest to U. So simple. So mobile. So rewarding.</p>
        </div>
        <div className={styles.CustomContainer}>
            <div className={styles.ImageContainer + " "+ styles.Custom}>
                <div className={styles.Overlay}>
                <p className={styles.Service}>For Salons / Spas</p>
                <button className={styles.CTAButton}><span className={styles.ButtonText}>Sign Up</span></button>
                </div>
            </div>
            <p className={styles.Text}>The beauty platform that benefits U.
    Prim-U makes offering customers exceptional luxury at everyday prices easy. We’ll make use of your under-utilised space and match U with any beauty therapist U need – from massage therapists to beauticians and hair stylists. It’s big businesses helping small businesses gain even bigger opportunities. It’s a win-win.</p>
        </div>
    </div>
    </>
    ) 
}

export default Services