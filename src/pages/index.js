import * as React from "react"
import "./index.css"
import Navbar from "../components/nav/Nav"
import Hero from "../components/hero/Hero"
import ForCustomers from "../components/card/ForCustomers"
import Gallery from "../components/gallery/Gallery"
import Header from "../components/header/Header"
import Services from "../components/gallery/Services"
import AppSection from "../components/app/App"
import VideoContainer from "../components/videoSection/Video"
import ReviewContainer from "../components/reviews/Reviews"
import ProductContainer from "../components/products/Products"
import FAQContainer from "../components/accordion/FAQContainer"
import SocialMediaSection from "../components/socialMediaSection/SocialMediaSection"
import Footer from "../components/footer/Footer"
import ForMoreThanJustU from "../components/card/ForMoreThanJustU"

const IndexPage = () => {
  
  return (
    <>
    <Navbar />
    <main>
      <title>Prim-U</title>
      <Hero />
    <div className="MarginContainer">
      <ForCustomers />
      <Gallery/>
      <hr  />
      <ForMoreThanJustU />
      <hr  />
      <Header text={"For those who provide"} bold={"beauty services"} text2={''} />
    <Services/>
    </div>
    <AppSection/>
    <div className="MarginContainer">
        <VideoContainer />
        <hr />
        <Header text={"What our"} bold={"customers"} text2={'say'} />
        <ReviewContainer/>
        <hr />
        <Header text={"Beauty products"} bold={"for u"} text2={''} />
        <ProductContainer/>
        <hr />
        <Header text={"Frequently asked"} bold={"questions"} text2={''} />  
        <FAQContainer />
        <hr />
        <SocialMediaSection/>
    </div>
    <Footer />
    </main>
    </>
  )
}

export default IndexPage
