import * as React from "react"
import "./index.css"
import Navbar from "../components/nav/Nav"
import Hero from "../components/hero/Hero"
import Card from "../components/card/Card"
import Gallery from "../components/services/Services"
const IndexPage = () => {
  return (
    <>
    <Navbar />
    <main>
      <title>Prim-U</title>
      <Hero />
      <Card small={false} />
      <Gallery/>
      <Card small={true} />
      <Card small={true} />
      <Card small={true} />
      <Card small={true} />
      
    </main>
    </>
  )
}

export default IndexPage
