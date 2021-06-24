import React from "react";
import * as styles from "./Products.module.css";
import Carousel from "../carousel/Carousel";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Header from "../header/Header";
const Products = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProducts {
        edges {
          node {
            id
            image {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
              title
            }
            description {
              description
            }
            price
            priceLink
          }
        }
      }
    }
  `).allContentfulProducts.edges;
  const products = data.map(({ node }) => {
    return (
      <div key={node.id} className={styles.ProductContainer}>
        <BackgroundImage
          Tag="div"
          key={node.id}
          className={styles.ImageContainer}
          fluid={node.image.fluid}
          role="img"
          aria-label={"Image of " + node.image.title + " service"}
        />
        <div className={styles.ProductInfo}>
          <div className={styles.Name}>{node.image.title}</div>
          {node.description.description.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className={styles.Text}>
              {paragraph}
            </p>
          ))}
          <a href={node.priceLink} target="_blank" rel="noopener noreferrer">
            <div className={styles.PriceContainer}>
              <span className={styles.Price}>{node.price}</span>
            </div>
          </a>
        </div>
      </div>
    );
  });
  return <div className={styles.MainContainer}>{products}</div>;
};

const ProductContainer = () => {
  const currentRef = React.useRef(null);
  return (
    <>
      <Header text={"Beauty products"} bold={"for u"} text2={""} />
      <Carousel currentRef={currentRef} idx={"Products"}>
        <Products />
      </Carousel>
      <button className={styles.CTAButton + " CTAButton"}>
        <span className={styles.ButtonText + " ButtonText"}>
          check out beauty products
        </span>
      </button>
      <hr />
    </>
  );
};
export default ProductContainer;
