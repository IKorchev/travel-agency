import React from "react"
import Jumbotron from "../components/Jumbotron"
import Cards from "../components/Cards"

const jumbo_title = "Travel Agency"
const jumbo_text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc consequat interdum varius sit amet mattis vulputate."
const jumbo_button_text = "Learn more"
const jumbo_id = "jumbotron-home"
const Home = () => {
  return (
    <div
      id='home'
      role='tabpanel'
      aria-labelledby='home-tab'>
      <Jumbotron
        title={jumbo_title}
        text={jumbo_text}
        button={jumbo_button_text}
        id={jumbo_id}
      />
      <Cards />
    </div>
  )
}

export default Home
