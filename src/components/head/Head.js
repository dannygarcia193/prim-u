import { Helmet } from "react-helmet";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
const Head = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulMainSection {
        siteTitle
      }
    }
  `).contentfulMainSection;
  return (
    <Helmet>
      <html lang="en" />
      <title>{data.siteTitle}</title>
      <title>Home - Prim-U</title>
      <meta
        name="description"
        content="Prim-U is South Africa's first online booking hub that connects world-class beauty entrepreneurs in the industry to customers and hundreds of ..."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://prim-u.com/" />
      <meta property="og:title" content="Home - Prim-U" />
      <meta
        property="og:description"
        content="Prim-U is South Africa's first online booking hub that connects world-class beauty entrepreneurs in the industry to customers and hundreds of ..."
      />
      <meta
        property="og:image"
        content="https://prim-u.com/wp-content/uploads/2019/12/star-16.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://prim-u.com/" />
      <meta property="twitter:title" content="Home - Prim-U" />
      <meta
        property="twitter:description"
        content="Prim-U is South Africa's first online booking hub that connects world-class beauty entrepreneurs in the industry to customers and hundreds of ..."
      />
      <meta
        property="twitter:image"
        content="https://prim-u.com/wp-content/uploads/2019/12/star-16.png"
      />
      <link
        rel="icon"
        id="size32"
        sizes="32x32"
        href="https://d2sz1kgdtrlf1n.cloudfront.net/task_images/ppVD1594968116265-Wib51560451295403Screenshot20190613at19compressed.jpg"
      />
      <link
        rel="icon"
        id="size192"
        sizes="192x192"
        href="https://d2sz1kgdtrlf1n.cloudfront.net/task_images/ppVD1594968116265-Wib51560451295403Screenshot20190613at19compressed.jpg"
      />
      <link
        id="appFavicon"
        rel="icon"
        type="image/x-icon"
        href="https://d2sz1kgdtrlf1n.cloudfront.net/task_images/r4Nt1598422228207-Group1213x.png"
      />
    </Helmet>
  );
};

export default Head;
