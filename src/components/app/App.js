import * as styles from "./App.module.css"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const AppSection = () => {
    return (
        <div className={styles.AppSection}>
            <div className={styles.TextContainer}>
                <h2 className={styles.Title}>we have an app for u</h2>
                <p className={styles.Text}>Prim-U is South Africa’s first online booking hub that connects world-class beauty entrepreneurs in the industry to customers and hundreds of salons, spas, hotels and guests houses countrywide.</p>
                <p className={styles.Text}>From massages to beauty treatments to male grooming, we’re your one-stop platform for every pampering need.</p>
                <p className={styles.Text}>Our main aim is to give small businesses big opportunities, while bringing every customer the ultimate experience and 100% satisfaction. This is our promise.</p>
                <StaticImage className={styles.AppLogo} src="../../images/appStore.svg" />
                <StaticImage className={styles.AppLogo} src="../../images/googleApp.svg" />
            </div>
        <div className={styles.ImageSection} />
        </div>
      
    )
}
export default AppSection