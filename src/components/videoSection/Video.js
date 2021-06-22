import React from "react";
import * as styles from "./Video.module.css";
import Header from "../header/Header";
import { useStaticQuery, graphql } from "gatsby";

const VideoContainer = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulVideo {
        edges {
          node {
            id
            title
            videoUrl
          }
        }
      }
    }
  `).allContentfulVideo.edges[0].node;
  return (
    <>
      <Header text={""} bold={"Primlancers"} text2={"at work"} />
      <div className={styles.Placeholder}>
        <div className={styles.Overlay}>
          <a href={data.videoUrl} target="_blank" rel="noopener noreferrer">
            <div className={styles.VideoControl} />
          </a>
          <p className={styles.Text}>{data.title}</p>
        </div>
      </div>

      <button className={styles.CTAButton + " CTAButton"}>
        <span className={styles.ButtonText + " ButtonText"}>
          book a make up
        </span>
      </button>
    </>
  );
};

export default VideoContainer;
