import * as styles from "./Footer.module.css"
import { Link } from 'gatsby'
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () =>{
    const data = useStaticQuery(graphql`
    {
      contentfulFooterSection {
        appLink
        email
        facebookLink
        instagramLink
        linkedinLink
        phoneNumber
        privacyPolicyLink
        termsOfUseLink
        twitterLink
        ugcPolicyLink
        youTubeLink
      }
    }
  `).contentfulFooterSection
    return (
        <div className={styles.FooterContainer}>
             <ul className={styles.DocumentLinksContainer} role="navigation">
                <div className={styles.Heading}>PRIM-U APP © 2020</div>    
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to={data.appLink} target="_blank" rel="noopener noreferrer">PRIM-U App</Link>
                </li>
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to={data.privacyPolicyLink} target="_blank" rel="noopener noreferrer">PRIM-U Privacy Policy</Link>
                </li>
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to={data.ugcPolicyLink} target="_blank" rel="noopener noreferrer">Prim-U User Generated Content Policy</Link>
                </li>
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink}  to={data.termsOfUseLink} target="_blank" rel="noopener noreferrer">Prim-U Website Terms of Use</Link>
                </li>                  
             </ul>
            <ul className={styles.ContactListContainer} role="navigation">
                <div className={styles.Heading}>CONTACT US</div>    
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink}  to={data.email} target="_blank" rel="noopener noreferrer">hello@prim-u.com</Link>
                </li>  
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink}  to={data.phoneNumber} target="_blank" rel="noopener noreferrer">+31-123-45-67</Link>
                </li>  
            </ul>
            <ul className={styles.SocialLinksContainer} role="navigation">
                <div className={styles.Heading}>FOLLOW US</div>
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink}  to={data.facebookLink} target="_blank" rel="noopener noreferrer">Facebook</Link>
                </li>  
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink}  to={data.twitterLink} target="_blank" rel="noopener noreferrer">Twitter</Link>
                </li>  
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink}  to={data.linkedinLink} target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                </li>  
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to={data.youTubeLink} target="_blank" rel="noopener noreferrer">YouTube</Link>
                </li>  
                <li className={styles.LinkItem}>
                    <Link className={styles.TextLink} to={data.instagramLink} target="_blank" rel="noopener noreferrer">Instagram</Link>
                </li>  
            </ul>
        </div>
    )
}

export default Footer