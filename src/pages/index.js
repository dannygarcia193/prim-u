import * as React from "react";
import "./index.css";
import Head from "../components/head/Head";
import Navbar from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Gallery from "../components/gallery/Gallery";
import Services from "../components/gallery/Services";
import AppSection from "../components/app/App";
import VideoContainer from "../components/videoSection/Video";
import ReviewContainer from "../components/reviews/Reviews";
import ProductContainer from "../components/products/Products";
import FAQContainer from "../components/accordion/FAQContainer";
import SocialMediaSection from "../components/socialMediaSection/SocialMediaSection";
import Footer from "../components/footer/Footer";
import ForCustomers from "../components/card/ForCustomers";
import ForMoreThanJustU from "../components/card/ForMoreThanJustU";

const IndexPage = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [collapsedNavbar, setCollapsedNavbar] = React.useState(false);
  const [lightNav, setLightNav] = React.useState(false);

  function handleScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    if (scrolled > 0.01) setLightNav(true);
    else setLightNav(false);
  }

  function toggleVisibility() {
    window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
      toggleVisibility();
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll();
        toggleVisibility();
      });
    };
  });

  return (
    <>
      <Head />
      <Navbar
        collapsedNavbar={collapsedNavbar}
        lightNav={lightNav}
        setCollapsedNavbar={setCollapsedNavbar}
      />
      <main>
        <Hero />
        <div className="back-to-top show-back-to-top">
          {isVisible && (
            <div className="top" onClick={() => scrollToTop()}>
              Top
            </div>
          )}
        </div>
        <div className="MarginContainer">
          <ForCustomers />
          <Gallery />
          <ForMoreThanJustU />
          <Services />
        </div>
        <AppSection />
        <div className="MarginContainer">
          <VideoContainer />
          <ReviewContainer />
          <ProductContainer />
          <FAQContainer />
          <SocialMediaSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;
