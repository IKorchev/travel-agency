import React from 'react'
import { JumbotronContact } from '../components/Jumbotron'
import ContactComponent  from '../components/ContactComponent'
import Footer from '../components/Footer'
const Contact = () => {
    return (
        <div id="contact">
            <JumbotronContact />
            <ContactComponent />
            <Footer />
        </div>
    )
}

export default Contact
