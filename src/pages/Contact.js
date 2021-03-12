import React from "react"
import Jumbotron from "../components/Jumbotron"
import ContactComponent from "../components/ContactComponent"
import Footer from "../components/Footer"

const jumbo_title = "Get in touch!"
const jumbo_text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc consequat interdum varius sit amet mattis vulputate."
const jumbo_button_text = "Learn more"
const jumbo_id = "jumbotron-services"

const Contact = () => {
  return (
    <div id='contact'>
      <Jumbotron
        title={jumbo_title}
        text={jumbo_text}
        button={jumbo_button_text}
        id={jumbo_id}
      />
      <ContactComponent />
      <Footer />
    </div>
  )
}

export default Contact
