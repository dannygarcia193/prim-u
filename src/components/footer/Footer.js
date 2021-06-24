import * as styles from "./Footer.module.css";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
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
  `).contentfulFooterSection;
  return (
    <footer className={styles.FooterContainer}>
      <ul className={styles.DocumentLinksContainer} role="navigation">
        <div className={styles.Heading}>PRIM-U APP © 2020</div>
        <li className={styles.LinkItem}>
          <a
            className={styles.TextLink}
            href={data.appLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            PRIM-U App
          </a>
        </li>
        <li className={styles.LinkItem}>
          <a
            className={styles.TextLink}
            href={data.privacyPolicyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            PRIM-U Privacy Policy
          </a>
        </li>
        <li className={styles.LinkItem}>
          <a
            className={styles.TextLink}
            href={data.ugcPolicyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Prim-U User Generated Content Policy
          </a>
        </li>
        <li className={styles.LinkItem}>
          <a
            className={styles.TextLink}
            href={data.termsOfUseLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Prim-U Website Terms of Use
          </a>
        </li>
      </ul>
      <ul className={styles.ContactListContainer} role="navigation">
        <div className={styles.Heading}>CONTACT US</div>
        <li className={styles.LinkItem}>
          <a
            className={styles.TextLink}
            href={"mailto:" + data.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@prim-u.com
          </a>
        </li>
        <li className={styles.LinkItem}>
          <a
            className={styles.TextLink}
            href={"tel:" + data.phoneNumber}
            target="_blank"
            rel="noopener noreferrer"
          >
            +31-123-45-67
          </a>
        </li>
      </ul>
      <ul className={styles.SocialLinksContainer} role="navigation">
        <div className={styles.Heading}>FOLLOW US</div>
        <li className={styles.LinkItem}>
          <a
            className={styles.TextLink}
            href={data.facebookLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li className={styles.LinkItem}>
          <a
            className={styles.TextLink}
            href={data.twitterLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className={styles.LinkItem}>
          <a
            className={styles.TextLink}
            href={data.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.LinkItem}>
          <a
            className={styles.TextLink}
            href={data.youTubeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </li>
        <li className={styles.LinkItem}>
          <a
            className={styles.TextLink}
            href={data.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
