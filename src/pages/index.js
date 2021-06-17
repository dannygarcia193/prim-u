import * as React from "react"
import "./index.css"
import Navbar from "../components/nav/Nav"
import Hero from "../components/hero/Hero"
import Customer from "../components/customers/Customer"
import Gallery from "../components/services/Services"
const IndexPage = () => {
  return (
    <>
    <Navbar />
    <main>
      <title>Prim-U</title>
      <Hero />
      <Customer />
      <Gallery/>
      
    </main>
    </>
  )
}

export default IndexPage
