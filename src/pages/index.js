import * as React from "react"
import "./index.css"
import Navbar from "../components/nav/Nav"
import Hero from "../components/hero/Hero"
import Card from "../components/card/Card"
import Gallery from "../components/gallery/Gallery"
import Header from "../components/header/Header"
import Services from "../components/gallery/Services"
//import Services from "../components/services/Services"
const IndexPage = () => {
  return (
    <>
    <Navbar />
    <main>
      <title>Prim-U</title>
      <Hero />
      <Card small={false} />
      <Gallery/>
      <hr  />
      <Header text={"for"} bold={"more"} text2={"than just u"}/>
      <Card small={true} />
      <Card small={true} />
      <Card small={true} />
      <hr  />
      <Header text={"For those who provide"} bold={"beauty services"} text2={''} />
    <Services/>
    </main>
    </>
  )
}

export default IndexPage
