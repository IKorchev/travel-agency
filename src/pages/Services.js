import React from "react"
import Jumbotron from "../components/Jumbotron"
import ServicesCard from "../components/Services"

const jumbo_title = "Our services"
const jumbo_text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
const jumbo_button_text = "Learn more"
const jumbo_id = "jumbotron-services"

const Services = () => {
  return (
    <div id='services'>
      <Jumbotron
        title={jumbo_title}
        text={jumbo_text}
        button={jumbo_button_text}
        id={jumbo_id}
      />
      <ServicesCard />
    </div>
  )
}

export default Services
