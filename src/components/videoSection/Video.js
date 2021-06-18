import React from "react"
import * as styles from "./Video.module.css"
import Header from "../header/Header"
const VideoContainer = () =>{
    return (
        <>
        <Header text={""} bold={"Primlancers"} text2={'at work'} />
        <div className={styles.Placeholder} />
        <p className={styles.Text}>Prim-u make up</p>
        <button className={styles.CTAButton + ' ' + 'CTAButton'}>
            <span className={styles.ButtonText+ ' ' + 'ButtonText'}>book a make up</span>
        </button>
        </>
    )
}

export default VideoContainer