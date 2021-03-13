import React from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import "./App.css"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
