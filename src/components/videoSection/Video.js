import React from "react";
import * as styles from "./Video.module.css";
import Header from "../header/Header";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import PlayButton from "./PlayButton";
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

  React.useEffect(() => {
    getVideo();
  }, []);

  const getVideo = () => {
    var v = document.getElementById("replace");
    v.addEventListener("click", function () {
      let parent = this.parentNode;
      createIframe(parent);
    });
  };

  function createIframe(parent) {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", data.videoUrl);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "accelerometer",
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    );
    parent.firstChild.replaceWith(iframe);
  }

  return (
    <>
      <Header
        text={""}
        bold={"Primlancers"}
        text2={"at work"}
        customClass={" " + styles.Header}
      />
      <div className="youtube-container">
        <div className={styles.Wrapper}>
          <div id="replace" className={styles.InitialContainer}>
            <StaticImage src="../../images/makeup.jpg" alt="Youtube Preview" />
            <PlayButton className={styles.VideoControl} />
            <p className={styles.Text}>{data.title}</p>
          </div>
        </div>
      </div>

      <a
        href="https://www.prim-u.app/en/list"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={styles.CTAButton + " CTAButton"}>
          <span className={styles.ButtonText + " ButtonText"}>
            book a make up
          </span>
        </button>
      </a>
      <hr className={styles.HR} />
    </>
  );
};

export default VideoContainer;
