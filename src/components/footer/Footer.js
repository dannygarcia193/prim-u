import * as styles from "./Footer.module.css"
import { Link } from 'gatsby'
import React from "react"
const Footer = () =>{
    return (
        <div className={styles.FooterContainer}>
             <ul className={styles.DocumentLinksContainer}>
                <div className={styles.Heading}>PRIM-U APP © 2020</div>    
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to="/">PRIM-U App</Link>
                </li>
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to="/">PRIM-U Privacy Policy</Link>
                </li>
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to="/">Prim-U User Generated Content Policy</Link>
                </li>
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to="/">Prim-U Website Terms of Use</Link>
                </li>                  
             </ul>
            <ul className={styles.ContactListContainer}>
                <div className={styles.Heading}>CONTACT US</div>    
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to="/">hello@prim-u.com</Link>
                </li>  
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to="/">+31-123-45-67</Link>
                </li>  
            </ul>
            <ul className={styles.SocialLinksContainer}>
                <div className={styles.Heading}>FOLLOW US</div>
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to="/">Facebook</Link>
                </li>  
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to="/">Twitter</Link>
                </li>  
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to="/">LinkedIn</Link>
                </li>  
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to="/">YouTube</Link>
                </li>  
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to="/">Instagram</Link>
                </li>  
            </ul>
        </div>
    )
}

export default Footer