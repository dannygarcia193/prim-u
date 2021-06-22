import React from "react";
import * as styles from "./Video.module.css";
import Header from "../header/Header";
import { useStaticQuery, graphql } from "gatsby";
/**
 *           <a href= target="_blank" rel="noopener noreferrer">
            <div clas{data.videoUrl}sName={styles.VideoControl} />
          </a>

          className={styles.VideoControl}
 */
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
      <iframe
        className={styles.VideoFrame}
        title="Prim U Make Up"
        src={data.videoUrl}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
        id="fitvid319110"
      >
        <p className={styles.Text}>{data.title}</p>
      </iframe>

      <button className={styles.CTAButton + " CTAButton"}>
        <span className={styles.ButtonText + " ButtonText"}>
          book a make up
        </span>
      </button>
    </>
  );
};

export default VideoContainer;
