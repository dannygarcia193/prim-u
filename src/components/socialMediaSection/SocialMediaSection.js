import React from "react"
import * as styles from "./SocialMediaSection.module.css"

const SocialMediaSection = () =>{
    return(
        <div className={styles.Container}>
            <div className={styles.Image} />
            <div className={styles.Info}>
                <h3 className={styles.Heading}>We post interesting stuff on our <span className={styles.PrimaryText}>instagram</span></h3>
                <p className={styles.Text}>Get information about beauty routines and products right in your feed!</p>
                <button className={styles.Btn}><span className={styles.BtnText}>SUBSCRIBE</span></button>
            </div>
        
        </div>
    )
}
export default SocialMediaSection