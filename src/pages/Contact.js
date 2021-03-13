import React from "react"
import Jumbotron from "../components/Jumbotron"
import Email from "../components/Email"
import Form from "../components/Form"
import Socials from "../components/Socials"

const jumbo_title = "Chat with us!"

const jumbo_text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
const jumbo_button_text = "Get in touch"
const jumbo_id = "jumbotron-contact"

const Contact = () => {
  return (
    <div id='contact'>
      <Jumbotron
        title={jumbo_title}
        text={jumbo_text}
        button={jumbo_button_text}
        id={jumbo_id}
      />
      <div className='container'>
        <div className='row justify-content-around my-3'>
          <h4 className='text-center mb-5'>CONTACT US:</h4>
          <Form />
          <Socials />
          <Email />
        </div>
      </div>
    </div>
  )
}

export default Contact
